import React, { useState } from 'react'
import Header from './../../components/header/Header'
import Footer from './../../components/footer/Footer'
import { Container, Row, Form, Button } from 'react-bootstrap'
import { CustomInputField } from '../../components/customInputField/CustomInputField'
const AdminRegistration = () => {

  const [form, setForm] = useState({})

  const handleOnChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    console.log(form)
  }

  const fields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Sam",
      required: true,
    },
    {
      label: "Last Name",
      name: "lfName",
      type: "text",
      placeholder: "Smith",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "email",
      required: true,
    },

    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "Phone",
      required: true,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
      placeholder: "DOB",
      required: true,
    },
    ,
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "address",
      required: true,
    },

    {
      label: "password",
      name: "password",
      type: "password",
      placeholder: "password",
      required: true,
    },

    {
      label: "Confirm Password",
      name: "confirmpassword",
      type: "password",
      placeholder: "******",
      required: true,
    },

  ]
  return (

    <>
      <Header />


      <section className="registration-template">
        <Container>

          <Row>
            <div className='page-title'>
              <h2>New Admin Registration</h2>
            </div>
            <Form onSubmit={handleOnSubmit}>
              <div className="form-wrap">
                <Row>

                  {fields.map((item, i) => (
                    <div className="col-md-6 mb-1">
                      <CustomInputField key={i} {...item} onChange={handleOnChange} />
                    </div>
                  ))}


                </Row>

                <Row>
                  <div className="col mb-4">
                    <Button className='btn btn-primary' type='submit'>Submit</Button>
                  </div>
                </Row>
                <Row>
                  <div className="col mb-4">
                    <a href="/">Forgot Password</a>
                  </div>
                </Row>




                <Row>
                  <div className="col mb-4">
                    Already have an account? <a href="/">Sign in</a>
                  </div>
                </Row>


              </div> </Form>

          </Row>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default AdminRegistration