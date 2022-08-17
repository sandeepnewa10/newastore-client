import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { SideMenu } from '../side-menu/SideMenu'

const AdminLayout = ({children}) => {
  return (
    <>
        <Header/>
        <SideMenu/>
        <main>{children}</main>
        <Footer/>    
    </>
  )
}

export default AdminLayout