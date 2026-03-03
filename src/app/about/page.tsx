import AboutHero from "@/components/about/AboutHero";
import OurApproach from "@/components/about/Approach";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import WhoWeAre from "@/components/about/WhoWeAre";
import React from "react";

const page = () => {
	return (
		<>
			<AboutHero />
			<WhoWeAre />
			<OurApproach />
			<MissionVision />
			<Values />
		</>
	);
};

export default page;
