"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
	"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1770361958/VR_KP_Logo_zgv7j5.png",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752675634/VR_KISAN_PARIVAAR-04_1_rbcvyz.png",
	"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1771917357/ULHC_Logo_-_PNG_yjb2jy.png",
	"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1767159149/vr_greentek_enegrgy_orange_bold_zzwnkq.png",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1758015372/3_rua9gv.png",
];

export default function LogoCarousel() {
	return (
		<section className="relative overflow-hidden bg-white py-24">
			<div className="mx-auto max-w-7xl px-6 text-center">
				{/* Heading */}
				<h2 className="text-3xl md:text-4xl font-semibold text-[#0E3C6E]">
					Trusted By{" "}
					<span className="bg-gradient-to-r from-[#0365D0] to-[#0E3C6E] bg-clip-text text-transparent">
						Leading Organizations
					</span>
				</h2>

				{/* Marquee */}
				<div className="relative mt-16 overflow-hidden">
					{/* Edge fade */}
					<div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20" />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20" />

					<motion.div
						className="flex gap-20"
						animate={{ x: ["0%", "-50%"] }}
						transition={{
							repeat: Infinity,
							duration: 35,
							ease: "linear",
						}}>
						{[...logos, ...logos].map((logo, i) => (
							<LogoItem key={i} src={logo} />
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}

/* ================= Logo Item ================= */

function LogoItem({ src }: { src: string }) {
	return (
		<motion.div
			whileHover={{ y: -12 }}
			transition={{ type: "spring", stiffness: 180, damping: 18 }}
			className="relative flex items-center justify-center">
			<div className="flex h-24 w-52 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#0365D0]/30">
				<Image
					src={src}
					alt="Client Logo"
					width={150}
					height={70}
					className="object-contain transition duration-300"
				/>
			</div>
		</motion.div>
	);
}
