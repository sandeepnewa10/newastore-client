import React from 'react'
import Header from './../../components/header/Header'
import Footer from './../../components/footer/Footer'
import { Container, Row, Button } from 'react-bootstrap'
import { CustomInputField } from '../../components/customInputField/CustomInputField'

const LoginPage = () => {
    const fields = [
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "email",
            required: true,
        },
        {
            label: "password",
            name: "password",
            type: "password",
            placeholder: "password",
            required: true,
        }

    ]

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
                            <Row>
                                {fields.map((item, i) => (
                                    <div className="col-md-6 mb-1">
                                        <CustomInputField key={i} {...item} />
                                    </div>
                                ))}

                            </Row>
                            <Row>
                                <div className="col mb-4">
                                    <Button className='btn btn-primary' type='button'>Sign in</Button>
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

                        </div>

                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default LoginPage