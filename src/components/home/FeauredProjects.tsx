"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

type Project = {
	title: string;
	domain: string;
	blurb: string;
	leftImg: string;
	rightImg: string;
};

const PROJECTS: Project[] = [
	{
		title: "VR KISAN PARIVAAR",
		domain: "vrkisanparivaar.com",
		blurb:
			"A digital initiative empowering farmers through knowledge sharing and sustainable practices.",
		leftImg:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752474531/Comp4_xlcf1s.jpg",
		rightImg:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752474120/Agricultural-Systems-of-the-World_uf0f5q.jpg",
	},
	{
		title: "BUSINESS NETWORKING",
		domain: "bizn.in",
		blurb:
			"A professional networking platform connecting entrepreneurs and businesses.",
		leftImg:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1760728872/0x0_pddjs8.jpg",
		rightImg:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1760728872/business-networking-1080x675_jhlsjo.jpg",
	},
];

export default function FeaturedProjects() {
	return (
		<section className="relative overflow-hidden bg-[#0B1E36] py-28 text-white">
			<TechBG />
			<SpotlightCursor />

			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<header className="mb-20 text-center">
					<h2 className="inline-block bg-[#00A0E3]  bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-5xl">
						Featured Projects
					</h2>
				</header>

				<div className="space-y-44">
					{PROJECTS.map((p, i) => (
						<CurtainBlock key={i} project={p} priority={i === 0} />
					))}
				</div>
			</div>
		</section>
	);
}

function CurtainBlock({
	project,
	priority = false,
}: {
	project: Project;
	priority?: boolean;
}) {
	const ref = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 70%", "end 20%"],
	});

	const leftX = useTransform(scrollYProgress, [0, 1], ["-6vw", "-100vw"]);
	const rightX = useTransform(scrollYProgress, [0, 1], ["6vw", "100vw"]);

	const cardY = useTransform(scrollYProgress, [0, 1], [10, -10]);

	return (
		<div ref={ref} className="relative">
			{/* Desktop */}
			<div className="hidden md:block relative h-[92vh]">
				<motion.div
					style={{ y: cardY as MotionValue<number> }}
					className="group absolute left-1/2 top-1/2 z-10 w-[min(92vw,780px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[34px] border border-white/10 bg-[#11294A]/70 px-10 py-12 text-center backdrop-blur-xl shadow-[0_0_60px_rgba(3,101,208,0.2)]">
					<motion.div
						aria-hidden
						initial={{ rotate: 0 }}
						animate={{ rotate: 360 }}
						transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
						className="absolute -inset-[2px] rounded-[inherit] bg-[conic-gradient(from_var(--tw-gradient-from-angle),#0365D0,#3B82F6,#0E3C6E,#0365D0)] opacity-20"
					/>

					<p className="mb-3 text-xs text-white/60">{project.domain}</p>

					<p className="mx-auto mb-6 max-w-[60ch] text-sm text-white/70 leading-relaxed">
						{project.blurb}
					</p>

					<h3 className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-5xl md:text-7xl font-semibold text-transparent">
						{project.title}
					</h3>
				</motion.div>

				<CurtainImage
					side="left"
					src={project.leftImg}
					alt={`${project.title} left`}
					priority={priority}
					style={{ x: leftX }}
				/>

				<CurtainImage
					side="right"
					src={project.rightImg}
					alt={`${project.title} right`}
					style={{ x: rightX }}
				/>
			</div>

			{/* Mobile — same premium card style */}
			<div className="md:hidden space-y-8">
				<CurtainImageMobile
					src={project.leftImg}
					alt={`${project.title} left`}
					priority={priority}
				/>

				<div className="rounded-2xl border border-white/10 bg-[#11294A]/70 px-6 py-8 text-center backdrop-blur shadow-[0_0_30px_rgba(3,101,208,0.2)]">
					<p className="text-xs text-white/60">{project.domain}</p>
					<p className="mt-3 text-sm text-white/70">{project.blurb}</p>
					<h3 className="mt-4 text-2xl font-semibold text-white">
						{project.title}
					</h3>
				</div>

				<CurtainImageMobile
					src={project.rightImg}
					alt={`${project.title} right`}
					priority={priority}
				/>
			</div>
		</div>
	);
}

function CurtainImage({ side, src, alt, style, priority = false }: any) {
	const sidePos =
		side === "left" ? "left-[calc(50%_-_18vw)]" : "right-[calc(50%_-_18vw)]";

	return (
		<motion.div
			style={style}
			whileHover={{ scale: 1.04 }}
			transition={{ type: "spring", stiffness: 120, damping: 20 }}
			className={`absolute top-1/2 z-20 aspect-[4/5] min-w-[280px] w-[36vw] max-w-[520px] -translate-y-1/2 overflow-hidden rounded-[34px] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)] ${sidePos}`}>
			<Image
				src={src}
				alt={alt}
				fill
				priority={priority}
				className="object-cover"
				sizes="36vw"
			/>

			<div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_50%,transparent,rgba(11,30,54,0.8))]" />
		</motion.div>
	);
}

function CurtainImageMobile({ src, alt, priority = false }: any) {
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			transition={{ type: "spring", stiffness: 140, damping: 18 }}
			className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
			<Image
				src={src}
				alt={alt}
				fill
				priority={priority}
				className="object-cover"
				sizes="100vw"
			/>

			<div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_50%,transparent,rgba(11,30,54,0.8))]" />
		</motion.div>
	);
}

function TechBG() {
	return (
		<div aria-hidden className="absolute inset-0">
			<div className="absolute inset-0 opacity-[0.25]">
				<div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#0365D0_0%,transparent_60%),radial-gradient(120%_80%_at_50%_110%,#0E3C6E_0%,transparent_60%)]" />
			</div>

			<motion.div
				className="absolute -left-10 top-1/4 h-80 w-80 rounded-full bg-[#0365D0]/20 blur-3xl"
				animate={{ y: [0, -20, 0] }}
				transition={{ duration: 10, repeat: Infinity }}
			/>

			<motion.div
				className="absolute -right-10 top-2/3 h-80 w-80 rounded-full bg-[#0E3C6E]/25 blur-3xl"
				animate={{ y: [0, 20, 0] }}
				transition={{ duration: 12, repeat: Infinity }}
			/>

			<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,rgba(11,30,54,0.95))]" />
		</div>
	);
}

function SpotlightCursor() {
	const [pos, setPos] = useState({ x: -9999, y: -9999 });

	useEffect(() => {
		const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);

	return (
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0 z-[1]"
			style={{
				background: `radial-gradient(240px 240px at ${pos.x}px ${pos.y}px, rgba(3,101,208,0.12), transparent 60%)`,
			}}
		/>
	);
}
