import React from 'react'
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex align-items-center justify-content-between" id="navbarTogglerDemo01">
                    <div className="left d-flex align-items-center justify-content-between">
                        <img src={logo} alt="logo" width={100} height={50} />
                        <form class="d-flex ps-2" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className="right d-flex text-light align-items-center justify-content-between">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Surat
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <Link href="/" className='mx-3 text-light p-0' >Logout</Link>
                        <Link href="/" className='pe-4 text-light'><i class="fa-regular fa-user"></i></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar