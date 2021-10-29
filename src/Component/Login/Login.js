import React from 'react';
import login from '../../Img/login1.png'
import bg from '../../Img/logback.jpg'
import './Login.css'
import useAuth from '../../hook/useAuth';
const Login = () => {
    const { SignInWithGoogle } = useAuth()
    return (
        <div className="cntr" >
            <div className='d-flex ' styles={{ backgroundImage: `${bg}` }}>
                <div className="container input-group cntr ">
                    <div className="card padding-card shadow sm-w-50 mx-auto  w-100" >

                        <div className="card-body p-3">
                            <h5 className="card-title text-center h3"> Sign In</h5>
                            <div className="d-flex flex-row gap-3  justify-content-center m-3">


                                <div className="d-md-flex d-lg-flex">

                                    <div>  <img className="img-fluid" src={login} alt="" /></div>
                                    <div className="text-center my-auto">
                                        <button className='btn btn-danger w-100 text-center ' onClick={SignInWithGoogle}><i className="bi bi-google"></i>  Sign in With Google</button>
                                    </div>

                                </div>



                            </div>







                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Login;