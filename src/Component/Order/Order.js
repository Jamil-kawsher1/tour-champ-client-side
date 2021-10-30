import React from 'react';
import useAuth from '../../hook/useAuth';
import './Order.css'
const Order = () => {
    const { user } = useAuth();
    return (
        <div className="orderform">
            {console.log(user)};
            <h1>Currenrt user Name {user.displayName}</h1>
        </div>
    );
};

export default Order;