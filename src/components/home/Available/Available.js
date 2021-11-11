import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUsers, faBuilding, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import './Available.css';

const Available = () => {
    // font awesome
    const car = <FontAwesomeIcon icon={faCar} />
    const customer = <FontAwesomeIcon icon={faUsers} />
    const branches = <FontAwesomeIcon icon={faBuilding} />
    const parts = <FontAwesomeIcon icon={faSuitcase} />
    return (
        <div className="available">
            <div className="container">
                <div className="count row p-4 mt-5">
                    <div className="p-2 col-md-3 text-center">
                        <h2>{car}</h2>
                        <h1>1624</h1>
                        <p>vehicles in stock</p>
                    </div>
                    <div className="p-2 col-md-3 text-center">
                        <h2>{customer}</h2>
                        <h1>4643</h1>
                        <p>HAPPY CUSTOMER REVIEWS</p>
                    </div>
                    <div className="p-2 col-md-3 text-center">
                        <h2>{branches}</h2>
                        <h1>400</h1>
                        <p>DEALER BRANCHES</p>
                    </div>
                    <div className="p-2 col-md-3 text-center">
                        <h2>{parts}</h2>
                        <h1>125</h1>
                        <p>FREE PARTS GIVEN</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Available;