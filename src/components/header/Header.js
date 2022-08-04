import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import './header.scss'

const Header = () => {
  return (
    <>
       <Navbar>
      <Container>
        <Navbar.Brand href="/">Newa CMS</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="ms-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>           
          </Nav>
      </Container>
    </Navbar>
    </>

  )
}

export default Header