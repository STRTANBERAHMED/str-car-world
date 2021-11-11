import React from 'react';
import { NavLink } from 'react-router-dom';
import notfound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <NavLink to="/"><button className="bg-green-300 hover:bg-white-700 text-white my-5 font-bold py-2 px-4 rounded">Go Back</button></NavLink>
        </div>
    );
};

export default NotFound;