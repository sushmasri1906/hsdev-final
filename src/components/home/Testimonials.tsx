"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
	name: string;
	role: string;
	quote: string;
	avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
	{
		name: "Thomas Kevin",
		role: "Business Owner",
		quote:
			"Clean wiring, clear labeling, and proper testing documents—everything was handover-ready. Safety standards were followed without compromise.",
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567940/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo_hdhwvt.jpg",
	},
	{
		name: "Ayesha Rahman",
		role: "Facility Manager",
		quote:
			"Clear documentation, clean deployment and excellent coordination. A reliable technology partner.",
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567966/803310b69b26c1c0e2f6bf3f62bc54e28d-28-american-woman-104.rsquare.w400_vcuglz.jpg",
	},
	{
		name: "Arjun Patel",
		role: "Home Owner",
		quote:
			"From planning to execution, the process was transparent and efficient. Results were measurable.",
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567940/961px-Outdoors-man-portrait__28cropped_29_ho5s6y.jpg",
	},
	{
		name: "Meera Nair",
		role: "Operations Head",
		quote:
			"Execution quality was excellent and timelines were maintained perfectly.",
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567968/beautiful-young-latin-american-woman-portrait-woman-walking-in-evening-city-in-hat-with-curly-hair-in-warm-weather-smiling-and-looking-at-camera-close-up-photo_ozjifb.jpg",
	},
	{
		name: "Ravi Kumar",
		role: "Project Lead",
		quote:
			"A professional team with strong technical expertise and structured execution.",
		avatar:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766567940/premium_photo-1664536392779-049ba8fde933_hvx006.jpg",
	},
];

const POSITIONS = [
	"left-[8%] top-[25%]",
	"right-[8%] top-[25%]",
	"left-[18%] bottom-[28%]",
	"right-[18%] bottom-[28%]",
];

export default function Testimonials() {
	const [active, setActive] = useState(1);
	const total = TESTIMONIALS.length;

	useEffect(() => {
		const id = setInterval(() => {
			setActive((prev) => (prev + 1) % total);
		}, 4000);
		return () => clearInterval(id);
	}, []);

	const current = TESTIMONIALS[active];

	return (
		<section className="relative overflow-hidden py-24 bg-white">
			{/* Soft Background Gradient */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-gradient-to-b from-[#0365D0]/5 via-white to-[#0E3C6E]/5" />
			</div>

			<div className="relative max-w-6xl mx-auto px-6 text-center">
				{/* Heading */}
				<h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1220]">
					Customer{" "}
					<span className="bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-transparent">
						Feedbacks
					</span>
				</h2>

				{/* Stage */}
				<div className="relative mt-20 min-h-[520px]">
					{/* Floating Avatars */}
					{TESTIMONIALS.slice(0, 4).map((t, i) => {
						const isActive = TESTIMONIALS.indexOf(current) === i;

						return (
							<motion.button
								key={t.name}
								onClick={() => setActive(i)}
								className={`absolute hidden md:block ${POSITIONS[i]}`}
								whileHover={{ scale: 1.1 }}>
								<motion.div
									animate={{ y: [0, -10, 0] }}
									transition={{
										duration: 3 + i * 0.4,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className={`relative h-16 w-16 rounded-full bg-white shadow-md transition
        ${
					isActive
						? "ring-2 ring-[#0365D0] ring-offset-4 ring-offset-white"
						: "ring-1 ring-black/10"
				}`}>
									<Image
										src={t.avatar}
										alt={t.name}
										fill
										className="rounded-full object-cover"
									/>

									{/* Soft active glow */}
									{isActive && (
										<span className="absolute -inset-4 rounded-full bg-[#0365D0]/15 blur-xl -z-10" />
									)}
								</motion.div>
							</motion.button>
						);
					})}

					{/* Faded Quote Icon */}
					<div className="absolute left-1/2 top-16 -translate-x-1/2 text-[#0365D0]/10 text-[120px] font-serif select-none">
						“”
					</div>

					{/* Quote Text */}
					<AnimatePresence mode="wait">
						<motion.p
							key={active}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.4 }}
							className="mx-auto max-w-3xl text-lg md:text-xl text-black/60 leading-relaxed">
							{current.quote}
						</motion.p>
					</AnimatePresence>

					{/* Center Profile */}
					<div className="mt-16 flex flex-col items-center">
						<div className="relative h-20 w-20 rounded-full bg-white shadow-lg ring-2 ring-[#0365D0]/40 ring-offset-4 ring-offset-white">
							<Image
								src={current.avatar}
								alt={current.name}
								fill
								className="rounded-full object-cover"
							/>
						</div>

						<p className="mt-4 text-xl font-semibold text-[#0B1220]">
							{current.name}
						</p>
						<p className="text-sm text-black/40">{current.role}</p>

						{/* Stars */}
						<div className="flex gap-1 mt-3">
							{Array.from({ length: 5 }).map((_, i) => (
								<Star
									key={i}
									size={18}
									className="fill-[#0365D0] text-[#0365D0]"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
