import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-dark mt-5">
            <div className="container pt-5 pb-2">
                <div className="row">
                    <div className="col-md-6">
                        <h5>About</h5>
                        <p>An in-depth look into the West Coast tech job market, analyzing distribution, tech trends, and salaries.</p>
                    </div>

                    <div className="col-md-6 text-right">
                        <p>© {new Date().getFullYear()} West Coast Tech Analysis</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
