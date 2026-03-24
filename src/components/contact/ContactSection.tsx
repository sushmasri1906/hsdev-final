"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Globe } from "lucide-react";
import { ReactNode } from "react";

/* ---------------- Animation Variant ---------------- */

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="relative mt-10 min-h-screen overflow-hidden bg-slate-100 py-20 text-gray-900">
			<AnimatedBG />

			{/* ===== Heading ===== */}
			<div className="relative z-10 mb-16 text-center">
				<h2 className="bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
					Contact Us
				</h2>

				<p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
					Let’s collaborate and build something exceptional together.
				</p>
			</div>

			<div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
				{/* ================= LEFT SIDE ================= */}

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative h-[460px] overflow-hidden rounded-2xl shadow-lg md:h-[540px]">
					<motion.div
						className="absolute inset-0 rounded-2xl"
						animate={{ y: [0, -6, 0] }}
						transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1760774763/banner-redimensionat_cyqakm.jpg"
							alt="Contact"
							fill
							className="rounded-2xl object-cover"
							priority
						/>
					</motion.div>

					<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

					{/* Text Card */}

					<div className="absolute bottom-6 left-6 right-6">
						<div className="rounded-xl border border-white/20 bg-white/10 px-5 py-6 text-white backdrop-blur-md">
							<h3 className="bg-gradient-to-r from-[#00A0E3] to-white bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
								Let’s Grow Your Business
							</h3>

							<p className="mt-2 text-sm text-white/80">
								We build product-grade software, modern websites, and growth
								systems.
							</p>

							<div className="mt-5 space-y-2 text-sm text-white/90">
								<ContactInfo icon={<Mail size={16} />} text="info@hsdev.com" />
								<ContactInfo
									icon={<MapPin size={16} />}
									text="Hyderabad, India"
								/>
								<ContactInfo icon={<Globe size={16} />} text="www.hsdev.in" />
							</div>
						</div>
					</div>
				</motion.div>

				{/* ================= RIGHT SIDE (FORM) ================= */}

				<motion.form
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="relative z-10 rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-lg md:px-10 md:py-10"
					onSubmit={(e) => e.preventDefault()}>
					<motion.h2
						variants={fadeUp}
						className="bg-gradient-to-r from-[#00A0E3] to-[#0365D0] bg-clip-text text-3xl font-semibold text-transparent">
						Get in Touch
					</motion.h2>

					<motion.p variants={fadeUp} className="mt-2 text-sm text-gray-600">
						Tell us what you’re building — we’ll make it real.
					</motion.p>

					<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
						<Field>
							<Input placeholder="Full Name" />
						</Field>

						<Field>
							<Input placeholder="Email" type="email" />
						</Field>

						<Field>
							<Input placeholder="Phone Number" type="tel" />
						</Field>

						<Field>
							<Input placeholder="Business Name" />
						</Field>
					</div>

					<Field>
						<textarea
							placeholder="Your Message"
							rows={4}
							className="mt-4 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-500 outline-none transition focus:border-[#00A0E3]"
						/>
					</Field>

					<div className="mt-6">
						<CTA>Let’s Grow Your Business</CTA>
					</div>
				</motion.form>
			</div>
		</section>
	);
}

/* ---------------- Background ---------------- */

function AnimatedBG() {
	return (
		<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
			<motion.div
				className="absolute inset-0 opacity-20"
				style={{
					background:
						"radial-gradient(120% 80% at 50% -10%, #00A0E3 0%, transparent 60%), radial-gradient(120% 80% at 50% 110%, #0365D0 0%, transparent 60%)",
				}}
				animate={{ backgroundPosition: ["0% 0%", "20% 10%", "0% 0%"] }}
				transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
			/>
		</div>
	);
}

/* ---------------- Reusable Components ---------------- */

function Field({ children }: { children: ReactNode }) {
	return <motion.div variants={fadeUp}>{children}</motion.div>;
}

function Input({
	placeholder,
	type = "text",
}: {
	placeholder: string;
	type?: string;
}) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-500 outline-none transition focus:border-[#00A0E3]"
		/>
	);
}

function CTA({ children }: { children: ReactNode }) {
	return (
		<motion.button
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#00A0E3] to-[#0365D0] px-6 py-3 text-sm font-semibold text-white shadow-lg">
			{children}
		</motion.button>
	);
}

function ContactInfo({ icon, text }: { icon: ReactNode; text: string }) {
	return (
		<div className="flex items-center gap-3">
			<div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-[#00A0E3]">
				{icon}
			</div>
			<span>{text}</span>
		</div>
	);
}
