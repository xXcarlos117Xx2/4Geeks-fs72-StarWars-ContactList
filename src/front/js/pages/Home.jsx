import React from "react";
import "../../styles/home.css";
import sw_char from "../../img/sw_char.png";
import sw_plan from "../../img/sw_plan.png";
import sw_ship from "../../img/sw_ship.png";
import sw_vehicle from "../../img/sw_vehicle.png";
import sw_contact from "../../img/sw_contact.png";
import sw_more from "../../img/sw_more.png";
import sw_star from "../../img/sw_star.png";
import { Link, useNavigate } from "react-router-dom";

const sections = [
	{ id: "characters", title: "Characters", imgSrc: sw_char, colorClass: "glow-hover glow-hover-green", textClass: "glow-text-green" },
	{ id: "starships", title: "Starships", imgSrc: sw_ship, colorClass: "glow-hover glow-hover-purple", textClass: "glow-text-purple" },
	{ id: "vehicles", title: "Vehicles", imgSrc: sw_vehicle, colorClass: "glow-hover glow-hover-blue", textClass: "glow-text-blue" },
	{ id: "planets", title: "Planets", imgSrc: sw_plan, colorClass: "glow-hover glow-hover-red", textClass: "glow-text-red" },
	{ id: "contact-list", title: "Contact List", imgSrc: sw_contact, colorClass: "glow-hover glow-hover-yellow", textClass: "glow-text-yellow" },
	{ id: "more", title: "More...", imgSrc: sw_more, colorClass: "glow-hover glow-hover-cyan", textClass: "glow-text-cyan" },
];

export const Home = () => {
	const navigate = useNavigate();

	const handleOnClick = (sectionId) => {
		if (sectionId === "contact-list") {
			navigate('/contact-list');
		} else {
            navigate('/star-wars/' + sectionId);
        }
    };


	return (
		<div className="container rounded-5 bg-secondary mb-5 glow" style={{ backgroundImage: `url(${sw_star})`, backgroundSize: 'cover' }} data-bs-theme="dark">
			<div className="px-4 pt-5 my-5 text-center border-bottom">
				<h1 className="display-4 fw-bold text-body-emphasis">Contact List & Star Wars Project</h1>
				<div className="col-lg-6 mx-auto">
					<p className="lead mb-4 text-white">Made by <a href="https://github.com/xXcarlos117Xx2" className="saber-green">xXcarlos117Xx2</a> & <a href="https://4geeks.com" className="saber-red">4Geeks</a> with ❤️</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
						<Link to='/contact-list'><button type="button" className="btn btn-primary btn-lg px-4 me-sm-3 saber-green glow-hover glow-hover-blue">Contact List</button></Link>
						<Link to='/star-wars'><button type="button" className="btn btn-primary btn-lg px-4 saber-green glow-hover glow-hover-blue">Star Wars</button></Link>
					</div>
				</div>
				<div className="overflow-hidden" style={{ maxHeight: 30 }}></div>
			</div>

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

