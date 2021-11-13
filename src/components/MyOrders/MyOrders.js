import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);

    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://car-world-97a21.web.app/myOrders/${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    })

    const handleDelete = (id) => {

        fetch(`https://car-world-97a21.web.app/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id)
    }

    return (
        <div>
            <h1>My orders </h1>
            <div className="services">
                <div className="row container">
                    {myOrders?.map((pd) => (
                        <div key={pd?._id} className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pd?.image} alt="" />
                                </div>

                                <h6>{pd?.name}</h6>
                                <h4>{pd?.model}</h4>
                                <h3>{pd?.price}$</h3>

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-dark"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;