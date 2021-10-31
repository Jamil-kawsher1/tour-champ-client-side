import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="fooa">
            <footer className="bg-dark text-white  ">
                <div className='container'>
                    <div className="d-flex justify-content-between">
                        <div className="mt-5 p-3">
                            <h4 className="text-start mt-3 addm"> <i className="fas fa-address-card"></i> <span>Address</span></h4>
                            <small className="text-start"><i class="fas fa-map-marker-alt"></i>

                                <span> Mohammadpur Dhaka 1207</span></small>
                            <h5 className="text-start mt-4">Social Connect</h5>
                            <p className="text-start"><span className="m-1 "><i class="fab fa-facebook-square"></i>

                            </span> <span className="m-1"><i class="fab fa-instagram-square"></i> <span className="m-1"><i class="fab fa-youtube-square"></i>

                            </span>
                                </span></p>


                        </div>

                        <div className="smm">
                            <h4 className="text-start mt-1 smm">Office Hour</h4>
                            <div>
                                <p>
                                    <pre>
                                        Friday           10am - 5pm
                                        <br />
                                        Saturday         10am - 5pm
                                        <br />
                                        Sunday           10am - 5pm
                                        <br />
                                        Monday           10am - 5pm
                                        <br />
                                        Tuseday          10am - 5pm
                                        <br />
                                        Wednessday       10am - 5pm
                                        <br />
                                        Thursday         10am - 5pm
                                        <br />

                                    </pre>
                                </p>

                            </div>


                        </div>

                    </div>


                    <p className="text-center "><i class="far fa-copyright"> Tour Champ</i>

                    </p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;