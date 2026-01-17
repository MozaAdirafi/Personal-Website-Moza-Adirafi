import React from "react";
import "./styles/experience.css";

const Experience = (props) => {
	const { company, position, period, location, responsibilities } = props;

	return (
		<div className="experience-item">
			<div className="experience-content">
				<div className="experience-header">
					<div className="experience-left">
						<div className="experience-company">{company}</div>
						<div className="experience-position">{position}</div>
						<div className="experience-location">{location}</div>
					</div>
					<div className="experience-period">{period}</div>
				</div>
				<ul className="experience-responsibilities">
					{responsibilities.map((responsibility, index) => (
						<li key={index}>{responsibility}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Experience;
