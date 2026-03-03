"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Globe } from "lucide-react";

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
			className="relative min-h-screen mt-10 overflow-hidden bg-gradient-to-br from-[#0E3C6E] to-[#0365D0] py-20 text-white">
			<AnimatedBG />

			{/* ===== Heading ===== */}
			<div className="relative z-10 text-center mb-16">
				<h2 className="bg-gradient-to-r from-[#00A0E3] to-white bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
					Contact Us
				</h2>
				<p className="mt-3 text-white/80 text-sm md:text-base max-w-2xl mx-auto">
					Let’s collaborate and build something exceptional together.
				</p>
			</div>

			<div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
				{/* ================= LEFT SIDE ================= */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative h-[460px] md:h-[540px] overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(3,101,208,0.25)]">
					<motion.div
						className="absolute inset-0 rounded-2xl"
						animate={{ y: [0, -6, 0] }}
						transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1760774763/banner-redimensionat_cyqakm.jpg"
							alt="Contact"
							fill
							className="rounded-2xl object-cover brightness-[0.9]"
							priority
						/>
					</motion.div>

					<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0E3C6E]/95 via-[#0E3C6E]/60 to-transparent" />

					{/* Text Card */}
					<div className="absolute bottom-6 left-6 right-6">
						<div className="rounded-xl border border-white/15 bg-white/10 px-5 py-6 backdrop-blur-md">
							<h3 className="bg-gradient-to-r from-[#00A0E3] to-white bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
								Let’s Grow Your Business
							</h3>
							<p className="mt-2 text-sm text-white/80">
								We build product-grade software, modern websites, and growth
								systems.
							</p>

							<div className="mt-5 space-y-2 text-sm text-white/90">
								<ContactInfo
									icon={<Mail size={16} />}
									text="info@vrtechforz.com"
								/>
								<ContactInfo
									icon={<MapPin size={16} />}
									text="Hyderabad, India"
								/>
								<ContactInfo
									icon={<Globe size={16} />}
									text="www.vrtechforz.com"
								/>
							</div>
						</div>
					</div>
				</motion.div>

				{/* ================= RIGHT SIDE (FORM) ================= */}
				<motion.form
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="relative z-10 rounded-2xl border border-white/15 bg-white/10 px-6 py-8 backdrop-blur-xl md:px-10 md:py-10"
					onSubmit={(e) => e.preventDefault()}>
					<motion.h2
						variants={fadeUp}
						className="bg-gradient-to-r from-[#00A0E3] to-white bg-clip-text text-3xl font-semibold text-transparent">
						Get in Touch
					</motion.h2>

					<motion.p variants={fadeUp} className="mt-2 text-sm text-white/80">
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
							className="mt-4 w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-[#00A0E3]"
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
function Field({ children }: { children: React.ReactNode }) {
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
		<div className="relative">
			<input
				type={type}
				placeholder={placeholder}
				className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-[#00A0E3]"
			/>
		</div>
	);
}

function CTA({ children }: { children: React.ReactNode }) {
	return (
		<motion.button
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#0E3C6E] to-[#0365D0] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_18px_rgba(3,101,208,0.35)]">
			{children}
		</motion.button>
	);
}

function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
	return (
		<div className="flex items-center gap-3">
			<div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-[#00A0E3]">
				{icon}
			</div>
			<span>{text}</span>
		</div>
	);
}
