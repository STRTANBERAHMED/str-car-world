import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const { _id, name, picture, season, price } = props.service || {}

    const history = useHistory()

    const handleDetails = (_id) => {
        const uri = `/manageOrders/${_id}`
        history.push(uri)
    }

    return (
        <div className="col-md-4 item">
            <div className="p-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            In {season}
                        </Card.Text>
                        <Card.Text>
                            ${price}
                        </Card.Text>
                        <Button
                            onClick={() => handleDetails(_id)}
                            variant="dark">Buy Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;