import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PlaceOrders.css'

const PlaceOrders = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://sleepy-refuge-74086.herokuapp.com/singleProduct/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [])

    console.log(product)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = "pending";

        fetch("https://sleepy-refuge-74086.herokuapp.com/confirmOrder", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    }
    return (
        <div>
            <div className="row container">
                <div className="col-md-6 my-5">
                    <div className="details-img">
                        <img className="w-75" src={product?.picture} alt="" />
                    </div>
                    <h2>{product?.name}</h2>
                    <h1> {product?.season}</h1>
                    <h1 className="text-danger"> {product?.price}$</h1>
                </div>
                <div className="orders col-md-6">
                    <h2>This is Information Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("username")}
                            defaultValue={user?.displayName}
                            className="p-2 m-2 w-50"
                        />

                        <input
                            {...register("email")}
                            defaultValue={user?.email}
                            className="p-2 m-2 w-50"
                        />
                        <input
                            {...register("phoneNumber", { required: true })}
                            placeholder="Phone Number"
                            className="p-2 m-2 w-50"
                        />
                        <input
                            {...register("address", { required: true })}
                            placeholder="Address"
                            className="p-2 m-2 w-50"
                        />
                        <input
                            {...register("name")}
                            defaultValue={product?.name}
                            className="p-2 m-2 w-50"
                        />

                        <input
                            {...register("date")}
                            type="date"
                            className="p-2 m-2 w-50"
                        />

                        <input
                            {...register("model", { required: true })}
                            defaultValue={product?.season}
                            className="p-2 m-2 w-50"
                        />

                        <select {...register("condition")} className="p-2 m-2 w-50">
                            <option value="premium">Brand New</option>
                            <option value="classic">Recondition</option>
                        </select>

                        <input
                            {...register("price", { required: true })}
                            defaultValue={product?.price}
                            className="p-2 m-2 w-50"
                        />

                        <input
                            {...register("image", { required: true })}
                            defaultValue={product?.picture}
                            className="p-2 m-2 w-50"
                        />

                        <input type="submit"
                            value="Order Now"
                            className="btn btn-dark w-25" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default PlaceOrders;