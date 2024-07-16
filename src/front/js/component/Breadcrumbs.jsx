import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className="ms-2 my-2" aria-label="breadcrumb">
            <ol className="breadcrumb">
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return isLast ? (
                        <li key={to} className="breadcrumb-item active" aria-current="page">
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </li>
                    ) : (
                        <li key={to} className="breadcrumb-item">
                            <Link className="saber-blue" to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export { Breadcrumbs };
