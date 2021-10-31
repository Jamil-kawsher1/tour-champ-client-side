import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { set } from 'react-hook-form';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://wicked-witch-66162.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <Row xs={1} md={3} className="g-4 m-3 w-auto">
                {
                    services.map(service => <SingleService services={service} key={service._id} ></SingleService>)

                }
            </Row>
        </div>
    );
};

export default Services;