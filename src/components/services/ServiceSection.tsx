"use client";

import { motion } from "framer-motion";
import {
	Globe,
	LayoutDashboard,
	Settings,
	Zap,
	Palette,
	Wrench,
	Mail,
	BarChart3,
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
		icon: BarChart3,
		number: "04",
		title: "CRM & Admin Dashboard Systems",
		description:
			"We build custom CRM and admin panel systems to manage users, track business activities, and gain real-time insights.",
		points: [
			"Customer & lead management systems",
			"Custom admin dashboards",
			"Real-time analytics & reporting",
			"Referral & activity tracking systems",
		],
		impact:
			"Gain full control over operations, track growth metrics, and make data-driven decisions.",
	},
	{
		icon: Mail,
		number: "05",
		title: "Email Integrations",
		description:
			"We seamlessly integrate email services into your applications to enable reliable communication, automation, and real-time notifications.",
		points: [
			"SMTP & API integrations ",
			"Transactional email setup",
			"Event-based email triggers",
			"Custom email workflows & automation",
		],
		impact:
			"Ensure reliable delivery, automate communication, and enhance user engagement.",
	},
	{
		icon: Zap,
		number: "06",
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
		number: "07",
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
		number: "08",
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
		<section className="relative overflow-hidden bg-white py-20 md:py-28">
			{/* Background Glow */}
			<div
				aria-hidden
				className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#00A0E3]/10 to-[#0365D0]/10 blur-[120px]"
			/>

			<div className="relative mx-auto max-w-6xl px-6">
				{/* Header */}

				<div className="max-w-3xl">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0365D0]">
						Our Capabilities
					</p>

					<h2 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
						Structured Technology
						<span className="block text-[#0365D0]">
							Built for Scalable Growth
						</span>
					</h2>

					<p className="mt-6 text-lg leading-relaxed text-gray-600">
						We design complete technology ecosystems that simplify operations,
						improve efficiency, and prepare your business for long-term growth.
					</p>
				</div>

				{/* Timeline */}

				<div className="relative mt-20">
					{/* Center Line */}

					<div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-[#00A0E3] to-[#0365D0] md:left-1/2 md:-translate-x-1/2" />

					<div className="space-y-16 md:space-y-24">
						{services.map((service) => {
							const Icon = service.icon;
							const index = Number(service.number) - 1;
							const isEven = index % 2 === 0;

							return (
								<motion.div
									key={service.number}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6 }}
									viewport={{ once: true }}
									className="relative grid items-start gap-10 pl-12 md:grid-cols-2 md:gap-20 md:pl-0">
									{/* Timeline Icon */}

									<div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0365D0] bg-white shadow-md md:left-1/2 md:-translate-x-1/2">
										<Icon className="text-[#0365D0]" size={18} />
									</div>

									{isEven ? (
										<>
											{/* Number */}

											<div className="hidden justify-end pr-20 md:flex">
												<span className="select-none text-[120px] font-bold text-gray-100">
													{service.number}
												</span>
											</div>

											{/* Content */}

											<div className="md:pl-20">
												<h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 md:text-3xl">
													<Icon className="text-[#0365D0]" size={24} />
													{service.title}
												</h3>

												<p className="mt-4 leading-relaxed text-gray-600">
													{service.description}
												</p>

												<ul className="mt-6 space-y-2">
													{service.points.map((point) => (
														<li
															key={point}
															className="flex gap-3 text-gray-700">
															<span className="mt-2 h-2 w-2 rounded-full bg-[#0365D0]" />
															<span>{point}</span>
														</li>
													))}
												</ul>

												<div className="mt-6 border-l-4 border-[#0365D0] pl-4">
													<p className="text-xs uppercase tracking-wide text-gray-500">
														Business Impact
													</p>
													<p className="mt-1 font-medium text-gray-800">
														{service.impact}
													</p>
												</div>
											</div>
										</>
									) : (
										<>
											{/* Content */}

											<div className="md:pr-20">
												<h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 md:text-3xl">
													<Icon className="text-[#0365D0]" size={24} />
													{service.title}
												</h3>

												<p className="mt-4 leading-relaxed text-gray-600">
													{service.description}
												</p>

												<ul className="mt-6 space-y-2">
													{service.points.map((point) => (
														<li
															key={point}
															className="flex gap-3 text-gray-700">
															<span className="mt-2 h-2 w-2 rounded-full bg-[#0365D0]" />
															<span>{point}</span>
														</li>
													))}
												</ul>

												<div className="mt-6 border-l-4 border-[#0365D0] pl-4">
													<p className="text-xs uppercase tracking-wide text-gray-500">
														Business Impact
													</p>
													<p className="mt-1 font-medium text-gray-800">
														{service.impact}
													</p>
												</div>
											</div>

											{/* Number */}

											<div className="hidden justify-start pl-20 md:flex">
												<span className="select-none text-[120px] font-bold text-gray-100">
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
