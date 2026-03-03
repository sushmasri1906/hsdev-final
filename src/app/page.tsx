import FeaturedProjects from "@/components/home/FeauredProjects";
import Hero from "@/components/home/Hero";
import LogoCarousel from "@/components/home/Logocarousel";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import ServicesMini from "@/components/home/ServicesMini";
import Testimonials from "@/components/home/Testimonials";
import React from "react";

const page = () => {
	return (
		<>
			<Hero />
			<ServicesMini />
			<FeaturedProjects />

			<LogoCarousel />
			<ProjectShowcase />

			<Testimonials />
		</>
	);
};

export default page;
