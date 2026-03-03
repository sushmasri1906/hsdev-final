"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Settings, Smartphone } from "lucide-react";

export default function ServicesHero() {
	return (
		<section className="relative overflow-hidden bg-[#0B1220] text-white py-28">
			{/* ===== Background Effects ===== */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Top Gradient Glow */}
				<div className="absolute -top-40 -left-40 h-[500px] w-[500px] bg-[#0365D0]/20 blur-[140px] rounded-full" />
				<div className="absolute bottom-0 right-0 h-[450px] w-[450px] bg-[#00A0E3]/20 blur-[140px] rounded-full" />

				{/* Radial Overlay */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,160,227,0.15),transparent_60%)]" />
			</div>

			<div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
				{/* ===== Left Content ===== */}
				<div>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-sm tracking-[0.3em] uppercase text-[#00A0E3] font-medium">
						Our Services
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
						Smart Technology
						<br />
						<span className="bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-transparent">
							Solutions for Modern Business
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl">
						We help businesses grow with scalable web development, AI-powered
						systems, automation, and secure digital infrastructure. Simple.
						Reliable. Future-ready.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="mt-10 flex flex-wrap gap-6">
						<Link
							href="/contact"
							className="rounded-md bg-gradient-to-r from-[#00A0E3] to-[#0365D0] px-8 py-4 text-sm font-semibold shadow-[0_0_25px_rgba(3,101,208,0.45)] hover:shadow-[0_0_40px_rgba(3,101,208,0.65)] transition active:scale-[0.98]">
							Get a Free Consultation
						</Link>

						<Link
							href="/about"
							className="rounded-md border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold hover:bg-white/10 transition">
							Learn About Us
						</Link>
					</motion.div>
				</div>

				{/* ===== Right Service Highlights ===== */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7 }}
					className="grid gap-6">
					<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#0365D0]/40 transition duration-300">
						<div className="flex items-center gap-4">
							<div className="p-3 rounded-lg bg-[#0365D0]/20">
								<Code2 className="text-[#0365D0]" size={22} />
							</div>
							<div>
								<h3 className="font-semibold text-lg">
									Custom Web Development
								</h3>
								<p className="text-sm text-white/60">
									Fast, scalable & secure web applications tailored to your
									business needs.
								</p>
							</div>
						</div>
					</div>

					<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#00A0E3]/40 transition duration-300">
						<div className="flex items-center gap-4">
							<div className="p-3 rounded-lg bg-[#00A0E3]/20">
								<Smartphone className="text-[#00A0E3]" size={22} />
							</div>
							<div>
								<h3 className="font-semibold text-lg">App Development</h3>
								<p className="text-sm text-white/60">
									High-performance mobile applications built for Android & iOS
									platforms.
								</p>
							</div>
						</div>
					</div>

					<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#0365D0]/40 transition duration-300">
						<div className="flex items-center gap-4">
							<div className="p-3 rounded-lg bg-[#0365D0]/20">
								<Settings className="text-[#0365D0]" size={22} />
							</div>
							<div>
								<h3 className="font-semibold text-lg">App Maintenance</h3>
								<p className="text-sm text-white/60">
									Continuous updates, monitoring & optimization to ensure smooth
									performance.
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
