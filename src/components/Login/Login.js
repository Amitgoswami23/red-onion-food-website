import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Login.css'

const Login = () => {
    return (
        <div className="login-page">
            <h2>Login Page</h2>
            <div className="container">
                <div className="login-form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                
                        <Button variant="primary" type="submit" className="form-contoll login-button">
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default Login
