import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './Context';
import Logo from '../assets/Logo.png'


const Header = () => {

    const { value } = useContext(AppContext);

    return (
        <div className='w-100'>

            {/* navbar */}

            <nav style={{ height: "64px",backgroundColor:value ? "whitesmoke" : ""}} className={`navbar navbar-expand-lg fixed-top`}>
                <div class="container-fluid" >
                    <img src={Logo} width="40" height="40" class="d-inline-block align-top ms-3" alt="" />
                    <a class="navbar-brand ms-2 fw-bolder fs-4" href="#">Shopzy</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item fw-bold ms-5">
                                <a class="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li class="nav-item fw-bold ms-5">
                                <a class="nav-link " href="#">Products</a>
                            </li>
                            <li class="nav-item fw-bold ms-5">
                                <a class="nav-link fw-bold " href="#">About Us</a>
                            </li>
                            <li class="nav-item fw-bold ms-5 me-5">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn fw-bold btn-outline-dark" type="button"><i class="fa-solid fa-search"></i></button>
                            <button type="button" className="btn fw-bold btn-outline-dark position-relative ms-3"><i class="fa-solid fa-cart-shopping"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">0</span></button>
                            <Link to=''><button class="btn fw-bold btn-outline-dark ms-3" type="button"><i class="fa-solid fa-sign-out"></i></button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header