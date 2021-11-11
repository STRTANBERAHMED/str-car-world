import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer bg-dark p-5 text-white">
            <h1>Contact Info</h1>
            <div className="d-flex justify-content-center mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Address</h3>
                        <p>Baris Mahalle, Safranbolu, Turkey</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Phone</h3>
                        <p>7946-5123</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Email</h3>
                        <p>strcar@world.com</p>
                    </div>
                </div>
            </div>
            <p>©2021. Str Car World. All rights reserved. STR Group.</p>
        </div>
    );
};

export default Footer;