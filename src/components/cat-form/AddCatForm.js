import React, { useState } from 'react'
import { Form, Row, Col, Button, FormGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { postCategoriesAction } from '../../pages/categoeries/CategoryAction'
import { useDispatch } from 'react-redux'



const initialState = {
    status: "inactive",
    name: "",
    parentId: null,
}
export const AddCatForm = () => {

   
    const dispatch = useDispatch()

    const [form, setForm] = useState(initialState)
    const { categories } = useSelector((state) => state.category)
    const handleOnChange = e => {
        let { checked, name, value } = e.target;
        if (name === 'status') {
            value = checked ? "active" : "inactive"
        }
        setForm({
            ...form,
            [name]: value,
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(postCategoriesAction(form))
    }
    return (
        <><Form className='border p-2 mb-5' onSubmit={handleOnSubmit}>
            <Row><h3 className='mt-3 mb-5'>Add New Category</h3></Row>
            <Row className='p-4'>
                <Col md="2 mb-5">
                    <FormGroup>
                        <Form.Check name="status" label="Status" type="switch" onChange={handleOnChange} />
                    </FormGroup>
                </Col>
                <Col md="4 mb-5">
                    <FormGroup>
                        <Form.Select name="parentId" onChange={handleOnChange}>
                            <option value="">Section Parent Category</option>
                            {
                                categories.length > 0 &&
                                categories.map((item) => !item.parentId && <option value={item._id}>{item.name}</option>)
                            }
                        </Form.Select>
                    </FormGroup>
                </Col>
                <Col md="5 mb-5">
                    <FormGroup>
                        <Form.Control type="text" placeholder="Enter Category name" name="name" onChange={handleOnChange} required />
                    </FormGroup>
                </Col>
                <Col md="1 mb-5">
                    <Button variant='primary' type="submit">Add</Button>
                </Col>
            </Row>
        </Form>
        </>
    )
}

export default AddCatForm