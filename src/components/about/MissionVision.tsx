"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
	return (
		<section className="relative overflow-hidden bg-white py-20">
			{/* Subtle Accent Streak */}

			{/* Large Background Text */}
			{/* Large Background Text (Hidden on Mobile) */}
			<div className="pointer-events-none absolute inset-0 hidden md:flex items-center justify-center">
				<h1 className="text-[160px] lg:text-[200px] font-bold text-[#0365D0]/[0.03] tracking-tight select-none">
					PURPOSE
				</h1>
			</div>

			<div className="relative mx-auto max-w-6xl px-6">
				{/* Section Label */}
				<div className="text-center mb-24">
					<p className="text-sm tracking-[0.4em] uppercase text-[#0365D0] font-medium">
						Our Direction
					</p>
				</div>

				{/* ================= MISSION ================= */}

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="grid md:grid-cols-12 gap-10 items-start">
					{/* Left Icon Column */}
					<div className="md:col-span-2 flex justify-start md:justify-center">
						<div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#00A0E3] to-[#0365D0] flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,160,227,0.4)]">
							<Target size={26} />
						</div>
					</div>

					{/* Content */}
					<div className="md:col-span-10">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#0E3C6E]">
							Our Mission
						</h2>

						<p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-4xl">
							To engineer
							<span className="text-[#0365D0] font-semibold">
								{" "}
								high-quality software
							</span>{" "}
							that enables organizations to operate with
							<span className="text-[#00A0E3] font-semibold">
								{" "}
								efficiency, clarity,
							</span>{" "}
							and long-term confidence in the evolving digital landscape.
						</p>

						<div className="mt-10 h-[1px] w-32 bg-gradient-to-r from-[#00A0E3] to-[#0365D0]" />
					</div>
				</motion.div>

				{/* Spacing */}
				<div className="h-32" />

				{/* ================= VISION ================= */}

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="grid md:grid-cols-12 gap-10 items-start">
					{/* Content First (Opposite Layout) */}
					<div className="md:col-span-10 md:order-1 order-2">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#0E3C6E]">
							Our Vision
						</h2>

						<p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-4xl">
							To become a
							<span className="text-[#00A0E3] font-semibold">
								{" "}
								trusted technology partner
							</span>{" "}
							recognized for delivering
							<span className="text-[#0365D0] font-semibold">
								{" "}
								reliable, scalable,
							</span>{" "}
							and forward-thinking digital solutions that shape sustainable
							growth.
						</p>

						<div className="mt-10 h-[1px] w-32 bg-gradient-to-r from-[#0365D0] to-[#00A0E3]" />
					</div>

					{/* Right Icon Column */}
					<div className="md:col-span-2 md:order-2 order-1 flex justify-start md:justify-center">
						<div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#0365D0] to-[#00A0E3] flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,160,227,0.4)]">
							<Eye size={26} />
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
