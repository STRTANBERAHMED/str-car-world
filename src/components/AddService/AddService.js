import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://sleepy-refuge-74086.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2>Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Company" required />
                <input {...register("season")} placeholder="Model" required />
                <input type="number" {...register("price")} placeholder="Price" required />
                <input {...register("picture")} placeholder="Picture url" required />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;