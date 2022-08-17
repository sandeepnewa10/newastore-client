import React from 'react'
import { Offcanvas, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setShowSideMenu } from '../../pages/system-state/systemSlice';
import Logo from "../../images/logo.png"
import { RiDashboard3Line, RiBankCard2Line, RiUser3Line, RiListCheck2, RiStarHalfSFill, RiSettings5Line } from 'react-icons/ri';
import {TbLayoutDashboard} from  'react-icons/tb';
import {IoIosListBox} from  'react-icons/io';
import {MdProductionQuantityLimits} from  'react-icons/md';
import { Link } from 'react-router-dom';


export const SideMenu = () => {
    const dispatch = useDispatch()
    const handleClose = () => dispatch(setShowSideMenu(false));
    const { showSideMenu } = useSelector((state) => state.system)


    return (
        <>
            <Offcanvas show={showSideMenu} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><img src={Logo} className="img-fluid" alt="logo" /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><Link onClick={handleClose} to="/dashboard" className='nav-link ptb-5'><TbLayoutDashboard className='mr-3' />Dashboard</Link></ListGroup.Item>
                        <ListGroup.Item><Link onClick={handleClose} to="" className='nav-link ptb-5'><RiListCheck2 className='mr-3' />Categories</Link></ListGroup.Item>
                        <ListGroup.Item><Link onClick={handleClose} to="/products" className='nav-link ptb-5'><MdProductionQuantityLimits className='mr-3' />Products</Link></ListGroup.Item>
                        <ListGroup.Item><Link onClick={handleClose} to="" className='nav-link ptb-5'><RiBankCard2Line className='mr-3' />Payment Methods</Link></ListGroup.Item>
                        <ListGroup.Item><Link onClick={handleClose} to="" className='nav-link ptb-5'><RiUser3Line className='mr-3' />Users</Link></ListGroup.Item>
                        <ListGroup.Item><Link onClick={handleClose} to="" className='nav-link ptb-5'><IoIosListBox className='mr-3' />Orders</Link></ListGroup.Item>
                        <ListGroup.Item><Link onClick={handleClose} to="" className='nav-link ptb-5'><RiStarHalfSFill className='mr-3' />Reviews</Link></ListGroup.Item>
                        <ListGroup.Item><Link onClick={handleClose} to="" className='nav-link ptb-5'><RiSettings5Line className='mr-3' />Setting</Link></ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


