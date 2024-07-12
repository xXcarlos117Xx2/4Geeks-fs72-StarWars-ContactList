import React from "react";
import sw_char from "../../img/sw_char.png";
import sw_plan from "../../img/sw_plan.png";
import sw_ship from "../../img/sw_ship.png";
import sw_vehicle from "../../img/sw_vehicle.png";
import sw_film from "../../img/sw_film.png";
import sw_star from "../../img/sw_star.png";
import sw_species from "../../img/sw_species.png";
import { Link, useNavigate } from "react-router-dom";

const sections = [
	{ id: "people", title: "People", imgSrc: sw_char, colorClass: "glow-hover glow-hover-green", textClass: "glow-text-green" },
	{ id: "starships", title: "Starships", imgSrc: sw_ship, colorClass: "glow-hover glow-hover-purple", textClass: "glow-text-purple" },
	{ id: "vehicles", title: "Vehicles", imgSrc: sw_vehicle, colorClass: "glow-hover glow-hover-blue", textClass: "glow-text-blue" },
	{ id: "planets", title: "Planets", imgSrc: sw_plan, colorClass: "glow-hover glow-hover-red", textClass: "glow-text-red" },
	{ id: "films", title: "Films", imgSrc: sw_film, colorClass: "glow-hover glow-hover-yellow", textClass: "glow-text-yellow" },
	{ id: "species", title: "Species", imgSrc: sw_species, colorClass: "glow-hover glow-hover-cyan", textClass: "glow-text-cyan" },
];

export const StarWarsHome = () => {
	const navigate = useNavigate();

	const handleOnClick = (sectionId) => {
		if (sectionId === "contact-list") {
			navigate('/contact-list');
		} else {
            navigate('/star-wars/' + sectionId);
        }
    };


	return (
		<div className="container rounded-5 bg-secondary px-5 mb-5 glow" style={{ backgroundImage: `url(${sw_star})`, backgroundSize: 'cover' }} data-bs-theme="dark">
			<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
				{sections.map((section, index) => (
					<div key={index} className="col">
						<div className={`card card-cover h-100 ${section.colorClass} text-bg-dark rounded-4`}>
							<div onClick={() => handleOnClick(section.id)} className="cursor-pointer overflow-hidden text-bg-dark rounded-4" style={{ backgroundImage: `url(${section.imgSrc})`, backgroundSize: 'cover' }}>
								<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
									<h3 className={`pt-5 mt-5 mb-4 display-6 lh-1 fw-bold ${section.textClass}`}>{section.title}</h3>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

