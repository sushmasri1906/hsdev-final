"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Layers, Hammer, Zap, Rocket } from "lucide-react";

const STEPS = [
	{
		title: "Understand",
		phase: "Phase 01",
		icon: Search,
		desc: "We immerse ourselves deeply into your business ecosystem, analyzing your operational workflows, competitive landscape, customer behavior, and long-term growth ambitions. This discovery phase ensures every technical decision aligns with measurable business outcomes and scalable strategy.",
		points: [
			"Stakeholder Discovery Workshops",
			"In-depth Business & Process Analysis",
			"Competitive & Market Research",
			"User Persona Identification",
			"Requirement Documentation & Roadmapping",
		],
	},
	{
		title: "Architect",
		phase: "Phase 02",
		icon: Layers,
		desc: "We translate insights into robust technical blueprints, crafting scalable, secure, and high-performance architectures. Our focus is on future-proof systems that support rapid growth, seamless integrations, and operational resilience.",
		points: [
			"High-Level & Low-Level System Design",
			"Scalable Cloud Infrastructure Planning",
			"Database Architecture & Optimization",
			"API & Integration Architecture",
			"Security & Compliance Framework Planning",
		],
	},
	{
		title: "Build",
		phase: "Phase 03",
		icon: Hammer,
		desc: "Our engineering team transforms strategy into reality using clean, modular, and maintainable code. We follow modern development standards, structured workflows, and collaborative practices to ensure long-term sustainability and product excellence.",
		points: [
			"Clean, Modular & Scalable Codebase",
			"Component-Driven Development",
			"Peer Code Reviews & Quality Assurance",
			"CI/CD Pipeline Implementation",
			"Agile Sprint-Based Execution",
			"Version Control & Documentation Standards",
		],
	},
	{
		title: "Optimize",
		phase: "Phase 04",
		icon: Zap,
		desc: "We continuously refine performance, enhance security, and streamline infrastructure to deliver exceptional speed and reliability. Optimization ensures your platform performs flawlessly across devices, networks, and user loads.",
		points: [
			"Performance Audits & Speed Optimization",
			"Infrastructure Scaling & Load Balancing",
			"Advanced Caching & Database Tuning",
			"UX & Accessibility Enhancements",
			"Security Hardening & Vulnerability Testing",
			"Cross-Device & Cross-Browser Optimization",
		],
	},
	{
		title: "Deliver",
		phase: "Phase 05",
		icon: Rocket,
		desc: "We launch with precision and continue supporting your growth journey. Our delivery process focuses on measurable impact, smooth deployment, proactive monitoring, and long-term scalability to ensure sustained digital success.",
		points: [
			"Strategic Launch & Go-Live Execution",
			"Deployment & Environment Configuration",
			"Real-Time Monitoring & Analytics Setup",
			"Post-Launch Performance Tracking",
			"Ongoing Maintenance & Technical Support",
			"Scalability Planning for Future Growth",
		],
	},
];

export default function OurApproach() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [active, setActive] = useState(0);

	/* ========= Desktop Scroll Logic ========= */
	useEffect(() => {
		if (window.innerWidth < 1024) return; // disable scroll behavior on small screens

		const handleScroll = () => {
			if (!containerRef.current) return;

			const scrollTop = window.scrollY - containerRef.current.offsetTop;
			const maxScroll = containerRef.current.offsetHeight - window.innerHeight;

			const progress = scrollTop / maxScroll;
			const step = Math.min(
				STEPS.length - 1,
				Math.max(0, Math.floor(progress * STEPS.length)),
			);

			setActive(step);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative text-white bg-gradient-to-br from-[#0E3C6E] via-[#0B1220] to-[#0B1220] lg:h-[500vh]">
			<div className="lg:sticky lg:top-0 lg:h-screen flex items-center py-20 lg:py-0">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
					{/* ================= NAVIGATION ================= */}

					<div className="mb-12">
						<div className="flex flex-wrap justify-center lg:justify-between gap-6">
							{STEPS.map((step, i) => {
								const Icon = step.icon;
								return (
									<button
										key={i}
										onClick={() => setActive(i)}
										className="flex flex-col items-center gap-2">
										<div
											className={`h-14 w-14 rounded-xl flex items-center justify-center transition-all duration-300
                        ${
													active === i
														? "bg-gradient-to-r from-[#00A0E3] to-[#0365D0] shadow-[0_0_20px_rgba(0,160,227,0.5)]"
														: "bg-[#111827] border border-white/10"
												}`}>
											<Icon size={20} />
										</div>
										<span
											className={`text-xs sm:text-sm ${
												active === i ? "text-white" : "text-white/60"
											}`}>
											{step.title}
										</span>
									</button>
								);
							})}
						</div>
					</div>

					{/* ================= CONTENT ================= */}

					<div className="grid lg:grid-cols-2 gap-10 items-start">
						{/* LEFT */}
						<div className="rounded-2xl border border-white/10 bg-[#111827]/60 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
							<AnimatePresence mode="wait">
								<motion.div
									key={active}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3 }}>
									<p className="text-sm tracking-widest text-[#00A0E3] uppercase">
										{STEPS[active].phase}
									</p>

									<h2 className="mt-4 text-2xl sm:text-3xl font-semibold">
										{STEPS[active].title}
									</h2>

									<p className="mt-6 text-sm sm:text-base text-white/70 leading-relaxed">
										{STEPS[active].desc}
									</p>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* RIGHT */}
						<div>
							<h3 className="text-white/60 uppercase tracking-widest text-sm mb-6">
								Key Focus Areas
							</h3>

							<ul className="space-y-3">
								{STEPS[active].points.map((point, i) => (
									<li
										key={i}
										className="flex items-start gap-3 text-sm sm:text-base text-white/80">
										<div className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#00A0E3] to-[#0365D0]" />
										{point}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Footer */}
					<div className="mt-16 text-white/50 text-sm text-center">
						We focus on long-term partnerships, not just projects.
					</div>
				</div>
			</div>
		</section>
	);
}
