import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Explore = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://sleepy-refuge-74086.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="container my-3">
                <div className="text-center">
                    <h1>Our Collections</h1>
                </div>
                <div className="row">
                    {
                        services.map(service =>
                            <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Explore;