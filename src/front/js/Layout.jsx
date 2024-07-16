import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL.js";

import { Home } from "./pages/Home.jsx";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Breadcrumbs } from "./component/Breadcrumbs.jsx";
import { ContactListHome } from "./pages/ContactListHome.jsx";
import { ContactList } from "./pages/ContactList.jsx";
import { ContactListForm } from "./pages/ContactListForm.jsx";
import { StarWarsHome } from "./pages/StarWarsHome.jsx";
import { StarWarsSection } from "./pages/StarWarsSection.jsx";
import { StarWarsDetails } from "./pages/StarWarsDetails.jsx";
import { Pedro } from "./pages/Pedro.jsx";
import { Page404 } from "./pages/404.jsx";
import { DebugPage } from "./pages/DEBUG.jsx";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div className="d-flex flex-column min-vh-100">
            <BrowserRouter basename={basename}>
                    <Navbar />
                    <Breadcrumbs />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<DebugPage />} path="/debug" />
                        <Route element={<ContactListHome />} path="/contact-list" />
                        <Route element={<ContactList />} path="/contact-list/:agendaName" />
                        <Route element={<ContactListForm />} path="/contact-list/:agendaName/:type/:id" />
                        <Route element={<ContactListForm />} path="/contact-list/:agendaName/:type" />
                        <Route element={<Page404 />} path="*" />
                        <Route element={<Pedro />} path="/pedro" />
                        <Route element={<StarWarsHome />} path="/star-wars" />
                        <Route element={<StarWarsSection />} path="/star-wars/:section" />
                        <Route element={<StarWarsDetails />} path="/star-wars/:section/:uid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
