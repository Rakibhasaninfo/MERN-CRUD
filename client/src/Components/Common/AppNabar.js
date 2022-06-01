import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function AppNabar() {
  return (
    <div><Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">CRUD</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link> <NavLink to="/">List</NavLink> </Nav.Link>
          <Nav.Link><NavLink to="/create">Create</NavLink></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default AppNabar

