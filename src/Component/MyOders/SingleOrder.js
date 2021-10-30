import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

const SingleOrder = (props) => {
    const { name, price, img, rating, _id } = props.orders;
    const refress = () => {
        window.location.reload(false);

    }


    const handleCancel = id => {
        console.log("cnacel cliked", id)
        const del = window.confirm("Are You Sure you Want to Cancel");
        if (del) {
            const url = `http://localhost:5000/deleteorder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(async res => {
                    if (res.status == 200) {
                        alert("cancaled Successfully");
                        refress();
                    }
                });
        }
    }
    return (
        <div className=" container mt-3">
            <div className="product myorder">
                <div>
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="mt-5">
                    <h4 className="product-name ">{name}</h4>
                    <p><small>Rating: {rating}</small></p>

                    <p>Price: {price}</p>
                    <Button onClick={() => {
                        handleCancel(_id)
                    }} className="btn btn-danger">Cancel</Button>


                </div>
            </div>
        </div>
    );
};

export default SingleOrder;