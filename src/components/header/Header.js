import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import './header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
       <Navbar>
      <Container>
        <Navbar.Brand href="/">Newa CMS</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="ms-auto">
            <Link className="nav-link"  to="/">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>           
          </Nav>
      </Container>
    </Navbar>
    </>

  )
}

export default Header