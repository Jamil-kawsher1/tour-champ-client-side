import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import './Myorder.css'
import SingleOrder from './SingleOrder';
const Myorders = () => {
    const { user } = useAuth();
    const [myorder, setMyorder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myorder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyorder(data));
    }, [user.email]);
    console.log(myorder);
    return (
        <div>
            {
                myorder.map(ord => <SingleOrder orders={ord} key={ord._id}></SingleOrder>)
            }
        </div>
    );
};

export default Myorders;