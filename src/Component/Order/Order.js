import React from 'react';
import useAuth from '../../hook/useAuth';
import './Order.css'
import { useForm } from "react-hook-form";

const Order = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = e => {

    }
    return (
        <div className="orderform palceorder">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 30 })} />
                <textarea type="text" placeholder="Description" {...register("Description", { required: true, })} />
                <input type="number" placeholder="Price" {...register("Price", { required: true, maxLength: 12 })} />
                <input type="text" placeholder="Img Url" {...register("ImgUrl", { required: true })} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Order;