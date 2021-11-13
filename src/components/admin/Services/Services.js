import React from "react";
import "./Services";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
const Services = () => {
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch("https://sleepy-refuge-74086.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    console.log(services);

    const handleDelete = (id) => {

        fetch(`https://sleepy-refuge-74086.herokuapp.com/deleteService/${id}`, {
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
            <div className="container">
                <h1>Manage Services </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service Name</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {services?.map((pd, index) => (
                        <tbody key={pd._id}>
                            <tr>
                                <td>{index}</td>
                                <td>{pd.name}</td>
                                <td>{pd.season}</td>
                                <td>{pd.price}</td>
                                <td>{pd.status}</td>
                                <td><button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn bg-dark text-light"
                                >
                                    Delete
                                </button></td>

                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default Services;
