import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';


const Collections = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://sleepy-refuge-74086.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 6)))
    }, [])

    return (
        <div>
            <div className="container my-3">
                <div className="text-center">
                    <h1>Our Collections</h1>
                </div>
                <div className="row">
                    {
                        items.map(item =>
                            <Collection
                                key={item._id}
                                item={item}
                            ></Collection>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Collections;