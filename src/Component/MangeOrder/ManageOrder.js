import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const ManageOrder = () => {
    const [allorder, setAllorder] = useState([]);

    useEffect(() => {
        fetch("https://wicked-witch-66162.herokuapp.com/allorders")
            .then(res => res.json())
            .then(data => setAllorder(data));
    }, [allorder])
    const handleCancel = id => {
        const del = window.confirm("Are You Sure you Want to Delete?");
        if (del) {
            const url = `https://wicked-witch-66162.herokuapp.com/deleteorder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(async res => {
                    if (res.status == 200) {
                        alert("Deleted Successfully");

                    }
                });
        }
    }

    const handleconfirm = id => {
        const url = `https://wicked-witch-66162.herokuapp.com/orderstatus/${id}`
        axios.put(url,)
            .then(response => console.log(response));
    }
    return (
        <div>

            {<h1 className="m-5 p-5">All Order : {allorder.length}</h1>}
            {
                allorder.map(order => <div className=" container mt-3 mb-3">

                    <div className="product myorder">
                        <div>
                            <img className="img-fluid" src={order.img} alt="" />
                        </div>
                        <div className="mt-5">
                            <h4 className="product-name ">{order.name}</h4>
                            <p><small>Odered By : {order.username}</small></p>
                            <p><small>Odered Status : {order.orderstatus}</small></p>

                            <p>Price: {order.price}</p>
                            <Button onClick={() => {
                                handleCancel(order._id)
                            }} className="btn btn-danger ms-1">Delete</Button>
                            <Button onClick={() => handleconfirm(order._id)} className="btn btn-success ms-1 m-2 ">Confirm</Button>


                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default ManageOrder;