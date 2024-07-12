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

export const StarWarsDetails = () => {
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
			https://tenor.com/es/view/mapache-pedro-gif-7206648027763736533
		</div>
	);
};

