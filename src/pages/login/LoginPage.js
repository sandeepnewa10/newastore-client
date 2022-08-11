import React, { useEffect, useState } from 'react'
import Header from './../../components/header/Header'
import Footer from './../../components/footer/Footer'
import { Container, Row, Button, Form } from 'react-bootstrap'
import { CustomInputField } from '../../components/customInputField/CustomInputField'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction } from "./userAction"
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({});

    const { user } = useSelector(state => state.admin)
    useEffect(() => {
        user._id && navigate("/dashboard");
    }, [user, navigate])

    const handleOnChange = e => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        console.log(form)
        dispatch(loginUserAction(form))

    }


    return (
        <>
            <Header />
            <section className="login-template">
                <Container>
                    <Row>
                        <div className='page-title'>
                            <h2>Login</h2>
                        </div>

                        <div className="form-wrap">
                            <Form onSubmit={handleOnSubmit}>
                                <Row>

                                    <div className="col-md-6 mb-1">
                                        <CustomInputField label="Email" onChange={handleOnChange} name="email" type="email" required={true} placeholder="Your Email"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-1">
                                        <CustomInputField label="Password" onChange={handleOnChange} name="password" type="password" required={true} placeholder="******"
                                        />
                                    </div>


                                </Row>
                                <Row>
                                    <div className="col mb-4">
                                        <Button className='btn btn-primary' type='submit'>Sign in</Button>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col mb-4">
                                        <a href="/">Forgot Password</a>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col mb-4">
                                        Don’t have an account?  <a href="/">Sign Up</a>
                                    </div>
                                </Row>

                            </Form>
                        </div>

                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default LoginPage