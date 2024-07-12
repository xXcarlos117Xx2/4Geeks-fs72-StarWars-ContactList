import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/404.css';
import astronaut from '../../img/astronaut.png';

export const Page404 = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="container-404 text-center">
            <h1 className="display-1">404</h1>
            <p className="lead">Oops! The page you're looking for doesn't exist.</p>
            <div className="astronaut">
                <img className='img-fluid' src={astronaut} alt="Astronaut floating in space" />
            </div>
            <button className="btn btn-secondary mt-4" onClick={handleGoHome}>
                Go Home
            </button>
        </div>
    );
};
