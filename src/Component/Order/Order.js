import React from 'react';
import useAuth from '../../hook/useAuth';
import './Order.css'
import { useForm } from "react-hook-form";

const Order = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(user);
    const onSubmit = e => {

    }
    return (
        <div className="orderform palceorder">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Service" {...register("Service", { required: true })} />
                <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} value={user.displayName} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} value={user.email} />
                <input type="date" placeholder="Time" {...register("Time", { required: true })} />
                <input type="number" placeholder="Price" {...register("Price", {})} />

                <input className="btn btn-primary" type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Order;