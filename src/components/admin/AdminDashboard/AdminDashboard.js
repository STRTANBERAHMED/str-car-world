import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

import ManageOrder from '../ManageOrders/ManageOrders';
import Services from '../Services/Services';
import './AdminDashboard.css'

const AdminDashboard = () => {
    const [control, setControl] = useState("adminDashboard");
    const { admin } = useAuth();

    console.log(control);

    console.log(control);

    return (
        <div>
            {admin && <div>
                <div className="admin-container">
                    <div className="dashboard">
                        <div className="admin-box">
                            <div className="row admin-container">
                                <div className="col-md-3">
                                    <div className="admin-area p-1">
                                        <h2>Dashboard</h2>
                                        <div className="all-menu mt-5">
                                            <li
                                                onClick={() => setControl("addService")}
                                                className="admin-menu p-2">Add Service</li>
                                            <li
                                                onClick={() => setControl("makeAdmin")}
                                                className="admin-menu p-2">Make Admin</li>
                                            <li
                                                onClick={() => setControl("services")}
                                                className="admin-menu p-2">Manage Service</li>
                                            <li
                                                onClick={() => setControl("ManageOrder")} className="admin-menu p-2">Manage Orders</li>
                                            <li
                                                onClick={() => setControl("status")} className="admin-menu p-2">Orders Status</li>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9 text-center">
                                    <h1>render your components</h1>
                                    {control === "services" && <Services></Services>}
                                    {control === "ManageOrder" && <ManageOrder></ManageOrder>}
                                    {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                                    {control === "addService" && <AddService></AddService>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default AdminDashboard;