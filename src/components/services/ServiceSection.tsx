"use client";

import { motion } from "framer-motion";
import {
	Globe,
	LayoutDashboard,
	Settings,
	Brain,
	Zap,
	Palette,
	Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
	icon: LucideIcon;
	number: string;
	title: string;
	description: string;
	points: string[];
	impact: string;
};

const services: Service[] = [
	{
		icon: Globe,
		number: "01",
		title: "Website Development",
		description:
			"We design and develop modern, high-performance websites that professionally represent your business online.",
		points: [
			"Mobile-friendly & responsive design",
			"Fast loading & SEO optimized",
			"Secure architecture",
			"Easy content management",
		],
		impact: "Build credibility and convert visitors into customers.",
	},
	{
		icon: LayoutDashboard,
		number: "02",
		title: "Web Application Development",
		description:
			"We build custom web-based software that streamlines business operations and improves productivity.",
		points: [
			"Admin dashboards",
			"Booking systems",
			"CRM systems",
			"Custom management portals",
		],
		impact: "Reduce manual processes and increase team efficiency.",
	},
	{
		icon: Settings,
		number: "03",
		title: "ERP Setup & Implementation",
		description:
			"We implement ERP systems that centralize and simplify your business processes.",
		points: [
			"Sales & inventory management",
			"Accounts & payroll",
			"Workflow customization",
			"Training & ongoing support",
		],
		impact: "Unify departments and gain real-time business visibility.",
	},
	{
		icon: Brain,
		number: "04",
		title: "AI-Powered Solutions",
		description:
			"We integrate intelligent AI systems to automate processes and enhance decision-making.",
		points: [
			"AI chat systems",
			"Automation tools",
			"Data intelligence systems",
			"AI-driven applications",
		],
		impact: "Save time, reduce errors, and improve productivity.",
	},
	{
		icon: Zap,
		number: "05",
		title: "Business Automation",
		description:
			"We automate routine tasks to reduce manual work and improve operational efficiency.",
		points: [
			"Customer management automation",
			"Sales tracking systems",
			"Performance monitoring",
			"Automated reporting",
		],
		impact: "Increase operational efficiency and reduce paperwork.",
	},
	{
		icon: Palette,
		number: "06",
		title: "UI/UX Design",
		description:
			"We design intuitive digital experiences that improve usability and customer trust.",
		points: [
			"User research",
			"Wireframing & prototyping",
			"Modern interface design",
			"Experience optimization",
		],
		impact: "Enhance user satisfaction and build brand trust.",
	},
	{
		icon: Wrench,
		number: "07",
		title: "Maintenance & Support",
		description:
			"We ensure your technology remains secure, optimized, and future-ready.",
		points: [
			"Regular updates",
			"Security monitoring",
			"Bug fixing",
			"Performance optimization",
		],
		impact: "Keep your systems reliable and up to date.",
	},
];

export default function ServiceSection() {
	return (
		<section className="bg-white py-32 relative overflow-hidden">
			{/* Soft Background Accent */}
			<div className="absolute top-0 right-0 h-[600px] w-[600px] bg-gradient-to-br from-[#00A0E3]/10 to-[#0365D0]/10 blur-[140px] rounded-full pointer-events-none" />

			<div className="max-w-6xl mx-auto px-6 relative">
				{/* ===== Header ===== */}
				<div className="max-w-3xl">
					<p className="text-sm tracking-[0.3em] uppercase text-[#0365D0] font-semibold">
						Our Capabilities
					</p>

					<h2 className="mt-6 text-5xl font-semibold text-gray-900 leading-tight">
						Structured Technology
						<span className="block text-gray-400">
							Built for Scalable Growth
						</span>
					</h2>

					<p className="mt-6 text-lg text-gray-600 leading-relaxed">
						We design complete technology ecosystems that simplify operations,
						improve efficiency, and prepare your business for long-term growth.
					</p>
				</div>

				{/* ===== Timeline ===== */}
				<div className="mt-24 relative">
					{/* Center Line */}
					<div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#00A0E3] to-[#0365D0]" />

					<div className="space-y-32">
						{services.map((service, index) => {
							const Icon = service.icon;
							const isEven = index % 2 === 0;

							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8 }}
									viewport={{ once: true }}
									className="relative grid md:grid-cols-2 gap-20 items-center">
									{/* Timeline Node */}
									<div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center h-12 w-12 rounded-full bg-white border-4 border-[#0365D0] shadow-lg z-10">
										<Icon className="text-[#0365D0]" size={20} />
									</div>

									{/* LEFT SIDE */}
									{isEven ? (
										<>
											{/* Number Side */}
											<div className="hidden md:flex justify-end pr-24">
												<span className="text-[140px] font-bold text-gray-100 select-none">
													{service.number}
												</span>
											</div>

											{/* Content Side */}
											<div className="md:pl-24">
												<h3 className="text-3xl font-semibold text-gray-900 flex items-center gap-4">
													<Icon className="text-[#0365D0]" size={28} />
													{service.title}
												</h3>

												<p className="mt-6 text-gray-600 text-lg leading-relaxed">
													{service.description}
												</p>

												<ul className="mt-8 space-y-3">
													{service.points.map((point, i) => (
														<li key={i} className="text-gray-700 flex gap-3">
															<span className="mt-2 h-2 w-2 rounded-full bg-[#0365D0]" />
															<span>{point}</span>
														</li>
													))}
												</ul>

												<div className="mt-10 border-l-4 border-[#0365D0] pl-6">
													<p className="text-sm uppercase tracking-wide text-gray-500">
														Business Impact
													</p>
													<p className="mt-2 text-gray-800 font-medium">
														{service.impact}
													</p>
												</div>
											</div>
										</>
									) : (
										<>
											{/* Content Side */}
											<div className="md:pr-24">
												<h3 className="text-3xl font-semibold text-gray-900 flex items-center gap-4">
													<Icon className="text-[#0365D0]" size={28} />
													{service.title}
												</h3>

												<p className="mt-6 text-gray-600 text-lg leading-relaxed">
													{service.description}
												</p>

												<ul className="mt-8 space-y-3">
													{service.points.map((point, i) => (
														<li key={i} className="text-gray-700 flex gap-3">
															<span className="mt-2 h-2 w-2 rounded-full bg-[#0365D0]" />
															<span>{point}</span>
														</li>
													))}
												</ul>

												<div className="mt-10 border-l-4 border-[#0365D0] pl-6">
													<p className="text-sm uppercase tracking-wide text-gray-500">
														Business Impact
													</p>
													<p className="mt-2 text-gray-800 font-medium">
														{service.impact}
													</p>
												</div>
											</div>

											{/* Number Side */}
											<div className="hidden md:flex justify-start pl-24">
												<span className="text-[140px] font-bold text-gray-100 select-none">
													{service.number}
												</span>
											</div>
										</>
									)}
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
