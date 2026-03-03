"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavLink = { label: string; href: string };

export default function Navbar() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [progress, setProgress] = useState(0);

	const links: NavLink[] = useMemo(
		() => [
			{ label: "Home", href: "/" },
			{ label: "About", href: "/about" },
			{ label: "Services", href: "/services" },
			{ label: "Careers", href: "/careers" },
			{ label: "Contact", href: "/contact" },
		],
		[],
	);

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY;
			setScrolled(y > 10);

			const doc = document.documentElement;
			const max = doc.scrollHeight - doc.clientHeight;
			const pct = max > 0 ? (y / max) * 100 : 0;
			setProgress(pct);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/";
		return pathname?.startsWith(href);
	};

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled ? "bg-white shadow-md border-b border-slate-200" : "bg-white"
			}`}>
			{/* Scroll Progress */}
			<div className="absolute left-0 top-0 h-[3px] w-full bg-slate-200">
				<div
					className="h-full bg-gradient-to-r from-[#0E3C6E] to-[#0365D0]"
					style={{ width: `${progress}%` }}
				/>
			</div>

			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-3">
					<Image
						src="https://res.cloudinary.com/dwsm6i6z9/image/upload/v1771573475/VR_Techforz_-_Logo_PNG_lvnctv.png"
						alt="VR Tech Forz Logo"
						width={180}
						height={48}
					/>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-8">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`relative text-sm font-medium transition duration-300 ${
								isActive(link.href)
									? "text-[#0E3C6E]"
									: "text-slate-600 hover:text-[#0365D0]"
							} group`}>
							{link.label}

							{/* Animated underline */}
							<span
								className={`absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#0E3C6E] to-[#0365D0] transition-all duration-300 ${
									isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
								}`}
							/>
						</Link>
					))}
				</nav>

				{/* CTA + Mobile Toggle */}
				<div className="flex items-center gap-3">
					<Link
						href="/contact"
						className="hidden md:inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#0E3C6E] to-[#0365D0] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
						Get a Quote
					</Link>

					<button
						className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
						onClick={() => setMenuOpen((v) => !v)}
						aria-label="Toggle menu">
						{menuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden border-t border-slate-200 bg-white">
					<div className="px-6 py-4 flex flex-col gap-2">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setMenuOpen(false)}
								className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
									isActive(link.href)
										? "bg-slate-100 text-[#0E3C6E]"
										: "text-slate-600 hover:bg-slate-100 hover:text-[#0365D0]"
								}`}>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</header>
	);
}
