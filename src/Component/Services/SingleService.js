import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css'


const SingleService = (props) => {
    const { _id, name, img, price, description, duration, rating } = props.services;
    console.log(props);
    return (
        <div>
            <Col className="zoomin">
                <Card className='border border-3 p-3'>
                    <Image className='w-50 p-3 mx-auto' src={img} />

                    {/* <h6 className='text-danger'>{level}</h6> */}
                    <Card.Body className='text-center'>
                        <Card.Title className='text-center'>{name}</Card.Title>

                        <h4 className='text-primary'>{price}$</h4>

                        <Card.Text>
                            {description.slice(0, 50) + '.....'}
                        </Card.Text>

                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-outline-danger">Details</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col >
        </div>
    );
};

export default SingleService;