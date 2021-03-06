import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <div className="login-page">
            <div className="container">
                <div className="register-form">
                    <h2>Login Page</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                
                        <Button variant="primary" type="submit" className="form-contoll register-button">
                            Submit
                        </Button>

                        <div className="footer-paragraph">
                            <p>Not Register Yet ? <Link to="/register">Create an account .</Link></p>
                        </div>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default Login
