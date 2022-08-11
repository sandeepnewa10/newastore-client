import React, { useState } from 'react'
import { Container, Navbar, Nav, Dropdown,  Button, Form, InputGroup } from 'react-bootstrap'
import {
    RiSearchLine, RiNotificationLine, RiMailLine, RiSettings5Line, RiUser3Line, RiLock2Line,
    RiHome4Line, RiTableAltLine, RiMenuLine, RiSoundModuleFill, RiLayoutLine
} from 'react-icons/ri'

import { BiCube } from 'react-icons/bi'
import { CgMenuLeftAlt } from 'react-icons/cg'
import {GrTree} from 'react-icons/gr'
import {TiDocumentText} from 'react-icons/ti'

import './dashboard.scss'
import Logo from './../../images/logo.png'


const Dashboard = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const ToggleSidebar = () => {
        sidebarIsOpen ? setSidebarIsOpen(false) : setSidebarIsOpen(true);
    }
    // const [navMenu, setNavMenu] = useState(false);
    // const ToggleMenu = () => {
    //     navMenu ? setNavMenu(false) : setNavMenu(true);
    // }






    return (
        <>
            <div className="wrapper">
                <div id="sidebar" className={sidebarIsOpen ? "sidebar-offcanvas" : ""}>
                    <div className="sidebar-header">
                        <div className="sidebar-header__logo">
                            <img src={Logo} className="img-fluid" />
                        </div>
                    </div>

                    <ul className="menu-inner">
                        <li className='active parent'>
                            <a href="">
                                <i><RiHome4Line /></i>
                                <div>Dashboard</div>
                            </a>
                        </li>
                        <li className='parent open'>
                            <a href="" className='menu-toggle link'>
                                <i><RiLayoutLine /></i>
                                <div>Layouts</div>
                            </a>
                            <ul className="menu-sub">
                                <li><a href="">Without Menu</a></li>
                                <li><a href="">Without navbar</a></li>
                                <li><a href="">Container</a></li>
                                <li><a href="">Fluid</a></li>
                                <li><a href="">Blank</a></li>
                            </ul>
                        </li>
                        <li className='parent'>
                            <a href="" className='link'>
                                <i><BiCube /></i>
                                <div>Element</div>
                            </a>
                        </li>
                        <li className='parent'>
                            <a href="" className='link'>
                                <i><GrTree /></i>
                                <div>Navigation</div>
                            </a>
                        </li>
                        <li className='parent'>
                            <a href="" className='link'>
                                <i><RiSoundModuleFill /></i>
                                <div>Component</div>
                            </a>
                        </li>
                        <li className='parent'>
                            <a href="" className='link'>
                                <i><TiDocumentText /></i>
                                <div>Form</div>
                            </a>
                        </li>
                        <li className='parent'>
                            <a href="" className='link'>
                                <i><RiTableAltLine /></i>
                                <div>Table</div>
                            </a>
                        </li>

                    </ul>




            


                </div>
                <div id="content">

                    <Navbar bg="light" expand="lg" className='main-nav'>
                        <Container fluid>
                            <div className={sidebarIsOpen ? "logo active" : "logo inactive"}><img src={Logo} className="img-fluid" /></div>
                            <button type="button" id="sidebarCollapse" className="btn-tog" onClick={ToggleSidebar}>

                                <CgMenuLeftAlt />
                            </button>

                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Nav className="me-auto">
                                {/* <Dropdown className="drop-wrap">
                                    <Dropdown.Toggle className='drop-wrap__title'>
                                        Dropdown <RiLock2Line />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="drop-wrap__list">
                                        <Dropdown.Item hreft="/action-1">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item hreft="/action-1">
                                            Another Action
                                        </Dropdown.Item>
                                        <Dropdown.Item hreft="/action-1">
                                            Lorem, ipsum dolor
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}




                                <InputGroup className="mb-3 search-block">
        <Button variant="outline-secondary" id="button-addon1" className='search-block__btn'>
        <RiSearchLine />
        </Button>      
        <Form.Control  className='search-block__input'          
          placeholder='Search...'
        />  
      </InputGroup>

                                
                            </Nav>
                            <div className='menu-link'>
                                <ul>
                                    <li><a href="/"><RiNotificationLine /></a></li>
                                    <li><a href="/"><RiMailLine /></a></li>
                                    <Dropdown className="drop-wrap">
                                        <Dropdown.Toggle className='drop-wrap__title'>
                                            <RiSettings5Line />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="drop-wrap__list-right">
                                            <Dropdown.Item hreft="/action-1">
                                                <span className="icon"><RiSettings5Line /></span>
                                                <span className="title">Manage Accounts</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item hreft="/action-1">
                                                <span className="icon"><RiSettings5Line /></span>
                                                <span className="title">Change Password</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item hreft="/action-1">
                                                <span className="icon"><RiSettings5Line /></span>
                                                <span className="title">Setting</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item hreft="/action-1">
                                                <span className="icon"><RiUser3Line /></span>
                                                <span className="title">Profile</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item hreft="/action-1">
                                                <span className="icon"><RiLock2Line /></span>
                                                <span className="title">Logout</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ul></div>
                         </Container>
                    </Navbar>
                </div>
            </div>
        </>
    )
}

export default Dashboard