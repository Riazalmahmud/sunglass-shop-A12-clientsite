import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';

import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import useFirebase from '../../Hooks/useFirebase';

const Navigation = () => {
    const { user, logOut, email } = useFirebase();
    return (
        <div>
            <Navbar className="bg-dark text-white">
                <Container>
                    <Navbar.Brand className="text-white" href="#home">Brand logo Here</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-white">
                        <Navbar.Text>
                            {
                                user?.email ?
                                    <Box>
                                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                            <Button color="inherit">Dashboard</Button>
                                        </NavLink>
                                        <Button onClick={logOut} color="inherit">Logout</Button>
                                    </Box>
                                    :
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </NavLink>
                            }
                        </Navbar.Text>
                        <Navbar.Text>

                            <Nav.Link as={Link} to="/MyOrder">My Order</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;