import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Experience from "../components/about/experience";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experience.css";

const ExperiencePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "experience");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="experience-logo-container">
						<div className="experience-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="experience-container">
						<div className="title experience-title">
							Professional Journey
						</div>

						<div className="subtitle experience-subtitle">
							Throughout my career, I've had the opportunity to
							work with innovative companies and participate in
							impactful projects. From developing backend services
							for fintech applications to implementing
							micro-frontend architectures, each experience has
							shaped my skills and passion for software
							engineering. Here's a look at my professional
							journey so far.
						</div>

						<div className="experience-list">
							{INFO.experience.map((exp, index) => (
								<Experience
									key={index}
									company={exp.company}
									position={exp.position}
									period={exp.period}
									location={exp.location}
									responsibilities={exp.responsibilities}
								/>
							))}
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ExperiencePage;
