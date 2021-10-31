import axios from 'axios';
import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';



const AddService = () => {

    const servicenameRef = useRef('');
    const servicedescriptionRef = useRef('');
    const serviceImageRef = useRef('');
    const servicePriceRef = useRef('');
    const serviceDurationRef = useRef('');
    const serviceRatingRef = useRef('');
    const handleOnsubmit = e => {
        e.preventDefault();
        const newservice = {
            name: servicenameRef.current.value,
            img: serviceImageRef.current.value,
            price: servicePriceRef.current.value,
            description: servicedescriptionRef.current.value,
            duration: serviceDurationRef.current.value,
            rating: serviceRatingRef.current.value,
        }
        axios.post('https://wicked-witch-66162.herokuapp.com/addService', newservice)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added Successfully");
                    servicenameRef.current.value = '';
                    serviceImageRef.current.value = '';
                    servicePriceRef.current.value = '';
                    servicedescriptionRef.current.value = '';
                    serviceDurationRef.current.value = '';
                    serviceRatingRef.current.value = '';
                }
            })

    }


    return (
        <div>
            <div className="container mb-5">



                <Form onSubmit={handleOnsubmit} className="mt-3 pt-3">
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Service Name" required ref={servicenameRef} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Service Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Service Description" required ref={servicedescriptionRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Service Image Url</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Service Image Url" required ref={serviceImageRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Service Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Service Price" required ref={servicePriceRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Tour/Service duration</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Tour/service duration" required ref={serviceDurationRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Service Rating</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Service Rating" required ref={serviceRatingRef} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddService;