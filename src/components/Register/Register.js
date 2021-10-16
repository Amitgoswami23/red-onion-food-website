import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
    return (
        <div className="register-page">
            <div className="container">
                <div className="register-form">
                    <h2>Register Page</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="cpassword" placeholder="Confirm Password" />
                        </Form.Group>
                
                        <Button variant="primary" type="submit" className="form-contoll register-button-form">
                            Submit
                        </Button>

                        <div className="footer-paragraph">
                            <p>Already Have an account ? <Link to="/login">Login Here</Link></p>
                        </div>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default Register
