import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import './Order.css'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import axios from '../../../../responsive-react/node_modules/axios';

const Order = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // console.log(user);
    const { id } = useParams();
    // console.log(id);
    const [singleService, setSingleService] = useState([]);
    const url = `http://localhost:5000/services/${id}`
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [])
    const onSubmit = e => {
        // console.log(e.Name, e.Email, e.Time);
        const orderData = {
            username: e.Name,
            useremail: e.Email,
            time: e.Time,
        }
        const singleServicedata = {
            name: singleService.name,
            img: singleService.img,
            price: singleService.price,
            description: singleService.description,
            duration: singleService.duration,
            rating: singleService.rating,




        }
        const fOrderData = { ...singleServicedata, ...orderData };
        console.log(fOrderData);


        axios.post('http://localhost:5000/placeorder', fOrderData)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Order Placed SuccessFully");


                }
            })
    }
    // console.log(singleService);
    return (
        <div className="orderform palceorder">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Service" {...register("Service", { required: true })} value={singleService.name} />
                <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} value={user.displayName} />
                <input type="text" placeholder="Tour Duration" {...register("Duration", { required: true, maxLength: 80 })} value={singleService.duration + " Days"} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} value={user.email} />
                <input type="date" placeholder="Time" {...register("Time", { required: true })} />
                <input type="text" placeholder="Price" {...register("Price", {})} value={singleService.price + " $"} />

                <input className="btn btn-primary" type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Order;