import React, { Component } from "react";

export const Footer = () => (
	<footer className="mt-auto d-flex flex-wrap justify-content-between align-items-center px-5 py-3 mt-4 border-top bg-dark" data-bs-theme="dark">
		<div className="col-md-4 d-flex align-items-center">
			<span className="mb-3 mb-md-0 text-body-secondary">© 2024 Campigroup.es</span>
		</div>

		<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
			<li className="ms-3"><a className="text-body-secondary" href="http://www.twitter.com/xXcarlos117Xx2"><i className="fa-lg fab fa-twitter-square"></i></a></li>
			<li className="ms-3"><a className="text-body-secondary" href="http://www.linkedin.com/in/xXcarlos117Xx2"><i className="fa-lg fab fa-linkedin"></i></a></li>
			<li className="ms-3"><a className="text-body-secondary" href="http://www.github.com/xXcarlos117Xx2"><i className="fa-lg fab fa-github-square"></i></a></li>
		</ul>
	</footer>
);
