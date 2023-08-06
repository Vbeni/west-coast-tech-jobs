import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">West Coast Tech Analysis</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
    </li>
    <li className="nav-item">
        <Link to="/map" className="nav-link">Job Distribution Map</Link>
    </li>
    <li className="nav-item">
        <Link to="/techbreakdown" className="nav-link">Technology Breakdown</Link>
    </li>
    <li className="nav-item">
        <Link to="/salarytrends" className="nav-link">Salary Trends</Link>
    </li>
    <li className="nav-item">
        <Link to="/technews" className="nav-link">Tech News</Link>
    </li>
    <li className="nav-item">
        <Link to="/joblistings" className="nav-link">Job Listings</Link>
    </li>
    <li className="nav-item">
        <Link to="/interviewprep" className="nav-link">Interview Prep</Link>
    </li>
</ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
