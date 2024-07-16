import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import sw_star from "../../img/sw_star.png";
/*
	<Route element={<StarWarsSection />} path="/star-wars/:section" />
	<Route element={<StarWarsDetails />} path="/star-wars/:section/:uid" />
*/

export const StarWarsSection = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 9;

	const navigate = useNavigate();

	const capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	const handleOnClick = (uid) => {
		navigate(`/star-wars/${params.section}/${uid}`);
	};

	const fetchData = async () => {
		await actions.fetchDataFromLocalStorage();
		!store.swApiData[params.section] && await actions.fetchDataFromLocalStorage();
		setData(store.swApiData[params.section]?.results);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(data.length / itemsPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className="container rounded-5 bg-secondary px-5 mb-5 glow" style={{ backgroundImage: `url(${sw_star})`, backgroundSize: 'cover' }} data-bs-theme="dark">
			<div className='row mt-2'><h1 className='text-light'>Star Wars {capitalize(params.section != "people" ? params.section : "Characters")}</h1></div>
			<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
				{currentItems && currentItems.map((item, index) => (
					<div key={index} className="col">
						<div className={`card card-cover h-100 text-bg-dark rounded-4`}>
							<div onClick={() => handleOnClick(item.uid)} className="cursor-pointer overflow-hidden text-bg-dark rounded-4" style={{ backgroundImage: `url(https://starwars-visualguide.com/assets/img/${params.section != "people" ? params.section : "characters"}/${item.uid}.jpg)`, backgroundSize: 'cover' }}>
								<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
									<h3 className={`pt-5 mt-5 mb-4 display-6 lh-1 fw-bold`} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</h3>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<ul className="pagination justify-content-center">
				{[...Array(totalPages)].map((_, index) => (
					<li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
						<button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
					</li>
				))}
			</ul>
		</div>
	);
};
