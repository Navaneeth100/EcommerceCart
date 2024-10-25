import React from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Container,
    Row,
    Col,
} from 'reactstrap';
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 position-relative" style={{ overflow: "hidden" }}>
            <video autoPlay loop muted playsInline className="position-absolute w-100 h-100" style={{ objectFit: "cover", zIndex: "-1" }}>
                {/* <source src={LoginVideo} type="video/mp4" /> */}
            </video>
            <div className='container position-relative' style={{ zIndex: "1" }}>
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-6 d-flex mt-3">
                        <img src={Logo} width="170" height="170" class="d-inline-block align-top" alt="" />
                        <span class="ms-2 fw-bolder" style={{ fontSize: "125px", color: "black" }}>Shopzy</span>
                    </div>
                    <div class="col-6 p-5">
                        <h2>Sign in</h2>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Username or Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Username or Email"
                                    type="email"
                                    className='mb-4'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    className='mb-4'
                                />
                            </FormGroup>
                            <Link to='/home'><Button className='w-100 mt-4 mb-4' color='dark'>Submit</Button></Link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login