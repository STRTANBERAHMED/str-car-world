import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const MangeOrder = () => {
    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    console.log(status);
    useEffect(() => {
        fetch("https://sleepy-refuge-74086.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    //     // const status = "apporved";
    const handleUpdate = (id) => {
        fetch(`https://sleepy-refuge-74086.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };

    return (
        <div className="container">
            <h1>All orders {orders.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Name</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.model}</td>
                            <td>{pd.price}</td>
                            <td>
                                <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={pd.status}
                                />
                            </td>
                            <button
                                onClick={() => handleUpdate(pd._id)}
                                className="btn bg-info p-2"
                            >
                                Update
                            </button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MangeOrder;
