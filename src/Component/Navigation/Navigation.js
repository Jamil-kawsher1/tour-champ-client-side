import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="light" sticky="top">

                <Container>

                    <Navbar.Brand className=" sm-text-center text-start"><Link to="/" className='linkstye text-white'> <span className="ml-5"> Tour Champ</span></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link ><Link to='/' className='linkstye text-white' >Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/doctors' className='linkstye text-white'>About</Link></Nav.Link>

                            <Nav.Link > <Link to='/contact' className='linkstye text-white'>Contact US</Link></Nav.Link>



                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        {user.email ? <Navbar.Text className="text-white">
                            Signed in as:  {user.displayName || user.email}   <button className="btn btn-danger" onClick={logOut}>Logout</button>
                        </Navbar.Text>
                            : <Nav.Link > <Link to='/login' className='linkstye text-white'>LogIn</Link></Nav.Link>

                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;