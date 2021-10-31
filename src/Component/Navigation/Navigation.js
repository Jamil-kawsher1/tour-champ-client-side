import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" sticky="top">

                <Container className="sticky-top">

                    <Navbar.Brand className=" sm-text-center text-start"><Link to="/" className='linkstye text-white'> <span className="ml-5"> Tour Champ</span></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link ><Link to='/' className='linkstye text-white' >Home</Link></Nav.Link>

                            {user.email && <Nav.Link > <Link to='/myorder' className='linkstye text-white'>My orders</Link></Nav.Link>}
                            {user.email && <Nav.Link > <Link to='/addService' className='linkstye text-white'>Add new Service</Link></Nav.Link>}
                            {user.email && <Nav.Link > <Link to='/manageorder' className='linkstye text-white'>Manage orders</Link></Nav.Link>}


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