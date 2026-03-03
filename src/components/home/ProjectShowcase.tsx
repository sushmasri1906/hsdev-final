"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function ProjectShowcase() {
	const PROJECTS = useMemo(
		() => [
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1753431191/Screenshot_2025-07-25_134250_fzqtfb.png",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1758018684/Screenshot_2025-09-16_160111_hbgfvy.png",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1758018625/Screenshot_2025-09-16_160002_jisqhr.png",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1758019435/Screenshot_2025-09-16_161336_n2rrtd.png",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1742481482/Screenshot_2025-03-20_200747_g8lw3z.png",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1741339318/Screenshot_2025-03-07_145105_p5nwh5.png",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1744710608/Screenshot_2025-04-15_151906_w836vq.png",
			},
		],
		[],
	);

	const n = PROJECTS.length;
	const step = 360 / n;

	return (
		<section
			id="work"
			className="relative min-h-[90svh] w-full overflow-hidden bg-gradient-to-b from-[#0E3C6E] via-[#06172e] to-[#030c1a] text-white">
			<div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-20 md:py-28">
				{/* Header */}
				<div className="text-center space-y-4">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[12px] text-white/70 backdrop-blur">
						<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#00A0E3] to-[#0365D0]" />
						Our Work
					</div>

					<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
						<span className="bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-transparent">
							Cutting Edge, Fast & Scalable Websites
						</span>
					</h2>

					<p className="mx-auto max-w-xl text-sm md:text-base text-white/70">
						Hand-crafted UI, performance-first engineering, SEO-ready, secure,
						and built to convert.
					</p>
				</div>

				{/* 3D Ring Carousel */}
				<div className="group relative mt-4 w-full select-none">
					<div className="mx-auto h-[260px] sm:h-[320px] md:h-[420px] w-full max-w-6xl [perspective:1400px]">
						<div
							className="relative mx-auto h-full w-full [transform-style:preserve-3d]"
							style={{ animation: "spin3d 45s linear infinite" }}>
							{PROJECTS.map((p, i) => {
								const rotate = i * step;

								return (
									<figure
										key={i}
										className="absolute left-1/2 top-1/2 h-[150px] w-[240px] sm:h-[200px] sm:w-[320px] md:h-[240px] md:w-[380px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1f3a]/60 shadow-[0_0_30px_rgba(3,101,208,0.15)] backdrop-blur-md transition duration-500 hover:scale-[1.07]"
										style={{
											transform: `rotateY(${rotate}deg) translateZ(clamp(180px,40vw,520px))`,
										}}>
										<Image
											src={p.src}
											alt="Project screenshot"
											fill
											className="object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
										/>
									</figure>
								);
							})}
						</div>
					</div>

					{/* Brand Reflection Glow */}
					<div className="pointer-events-none absolute inset-x-0 -bottom-8 mx-auto h-28 w-3/4 rounded-[100%] bg-gradient-to-r from-[#00A0E3]/25 via-[#0365D0]/25 to-[#0E3C6E]/25 blur-3xl" />
				</div>

				{/* CTA */}
				<div className="mt-12">
					<Link
						href="/contact"
						className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00A0E3] to-[#0365D0] px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(3,101,208,0.45)] transition hover:shadow-[0_0_45px_rgba(3,101,208,0.65)] active:scale-[0.98]">
						Get Your Website Now
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-5 w-5">
							<path d="M13.5 4.5a.75.75 0 0 0 0 1.5h5.69l-8.72 8.72a.75.75 0 1 0 1.06 1.06l8.72-8.72V15a.75.75 0 0 0 1.5 0V4.5h-11.25Z" />
						</svg>
					</Link>
				</div>
			</div>

			<style jsx>{`
				@keyframes spin3d {
					from {
						transform: rotateY(0deg);
					}
					to {
						transform: rotateY(-360deg);
					}
				}
			`}</style>
		</section>
	);
}
