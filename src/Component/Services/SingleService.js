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
                        <Card.Title className='text-center '><span className="text-primary"><i class="fas fa-map-marked-alt"></i>
                        </span>  {name}


                        </Card.Title>
                        <p>{duration} Days <i class="fas fa-calendar-day"></i></p>
                        <p className="text-warning"><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            <i class="far fa-star"></i> <span className="text-dark">({rating})</span>


                        </p>
                        <h4 className='text-primary'>{price}$</h4>

                        <Card.Text>
                            {description.slice(0, 50) + '.....'}
                        </Card.Text>

                        <Link to={`/placeorder/${_id}`}>
                            <button className="btn btn-outline-danger">BOOK NOW</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col >
        </div>
    );
};

export default SingleService;