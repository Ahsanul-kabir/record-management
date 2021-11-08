import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link mr-4" to="/"> Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4" to="/add">Add Record</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;