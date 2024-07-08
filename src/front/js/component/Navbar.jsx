import React from "react";
import { Link } from "react-router-dom";
import clanLogo from "../../img/clanLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark" data-bs-theme="dark">
			<div className="container-fluid">
				<img className="navbar-brand" src={clanLogo} width={50} />
				<Link to="/" className="navbar-brand">Campigroup</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact-list">Contact List</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/star-wars">Star Wars</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
