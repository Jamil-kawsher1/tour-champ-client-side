import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const ManageOrder = () => {
    const [allorder, setAllorder] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allorders")
            .then(res => res.json())
            .then(data => setAllorder(data));
    }, [allorder])
    const handleCancel = id => {
        const del = window.confirm("Are You Sure you Want to Cancel");
        if (del) {
            const url = `http://localhost:5000/deleteorder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(async res => {
                    if (res.status == 200) {
                        alert("cancaled Successfully");

                    }
                });
        }
    }
    return (
        <div>
            {
                allorder.map(order => <div className=" container mt-3 mb-3">
                    <div className="product myorder">
                        <div>
                            <img className="img-fluid" src={order.img} alt="" />
                        </div>
                        <div className="mt-5">
                            <h4 className="product-name ">{order.name}</h4>
                            <p><small>Rating: {order.rating}</small></p>

                            <p>Price: {order.price}</p>
                            <Button onClick={() => {
                                handleCancel(order._id)
                            }} className="btn btn-danger ms-1">Delete</Button>
                            <Button className="btn btn-success ms-1 m-2 ">Confirm</Button>


                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default ManageOrder;