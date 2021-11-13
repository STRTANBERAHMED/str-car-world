import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch("https://car-world-97a21.web.app/users/admin", {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input className="mx-2 mt-2" name="email" type="email" placeholder="Email" onBlur={handleOnBlur} />
                <Button type="submit" className="" variant="dark">Make Admin</Button>
            </form>
            {success && <div className="alert alert-success" role="alert">
                Made Admin successfully!
            </div>}
        </div>
    );
};

export default MakeAdmin;