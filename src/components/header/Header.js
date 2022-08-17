import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import './header.scss'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../../images/logo.png"
import { useSelector, useDispatch } from 'react-redux';
import { setShowSideMenu } from "../../pages/system-state/systemSlice"
import {CgMenuLeftAlt} from  'react-icons/cg';
import {adminLogout} from "../../pages/login/userAction.js"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state.admin)
  const handleShow = () => dispatch(setShowSideMenu(true));

  const handleOnLogout = () =>{
   dispatch(adminLogout())
   navigate("/")
  }

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/"><img src={Logo} className="img-fluid" width="150" alt="logo" /></Navbar.Brand>
          <Navbar.Toggle />
          {user._id && (
            <Button onClick={handleShow}>
              <CgMenuLeftAlt/>
            </Button>
          )} {

          }
          <Nav className="ms-auto">

            {user._id ? (
              <Link className="nav-link" to="/" onClick={handleOnLogout}>Logout</Link>
            ) : (
              <>
                <Link className="nav-link" to="/">Login</Link>
                <Link className="nav-link" to="/register">Register</Link>
              </>
            )
            }

          </Nav>
        </Container>
      </Navbar>
    </>

  )
}

export default Header