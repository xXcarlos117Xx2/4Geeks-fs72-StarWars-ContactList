import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Spinner } from '../component/Spinner.jsx';
import sw_star from "../../img/sw_star.png";

export const StarWarsDetails = () => {
    const { store, actions } = useContext(Context);
    const [details, setDetails] = useState(null);
    const params = useParams();

    const fetchDetails = async () => {
        const details = await actions.APICall(`${store.swBaseUrl}${params.section}/${params.uid}/`)
        setDetails(details.result);
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    if (!details) {
        return <div className='d-flex justify-content-center align-items-center'><Spinner /></div>;
    }

    return (
        <div className="container rounded-5 bg-secondary p-5 mb-5 glow" style={{ backgroundImage: `url(${sw_star})`, backgroundSize: 'cover' }} data-bs-theme="dark">
            <div className="row">
                <h1 className='text-white'>{details.properties?.name || details.properties?.title}</h1>
            </div>
            <div className='row'>
                <div className="col-md-4 col-12">
                    <img className="border border-2 rounded rounded-5 img-fluid mb-5" src={`https://starwars-visualguide.com/assets/img/${params.section != "people" ? params.section : "characters"}/${params.uid}.jpg`} />
                </div>
                <div className="col-md-6 col-12 ms-md-4">
                    <ul className='list-group'>
                        {Object.entries(details.properties || {}).map(([key, value]) => (
                            <li className='list-group-item' key={key}>{key}: {value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
};
