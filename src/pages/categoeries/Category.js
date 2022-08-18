import React from 'react'
import { Container } from 'react-bootstrap'
import AddCatForm from '../../components/cat-form/AddCatForm'
import CategoryTable from '../../components/category-table/CategoryTable'
import AdminLayout from '../../components/layout/AdminLayout'

const Category = () => {
  return (
   <><AdminLayout>
    <Container>
    <h2>Category Management</h2>
    {/*  Form  */}
    <AddCatForm/>
    {/* table  */}
    <CategoryTable/>
    </Container>
    </AdminLayout></>
  )
}

export default Category