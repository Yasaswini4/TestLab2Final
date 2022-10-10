import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-info">
                <div class="container">
                    <a class="navbar-brand d-flex align-items-end" href="#">
                        <img src="https://www.svgrepo.com/show/303110/apple-black-logo.svg" alt="Logo" width="55px" height="40px" class="d-inline-block" />
                        Apple
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/' class="nav-link active" aria-current="page" href="#" style={{color: 'black'}}>Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/news' class="nav-link" href="#" style={{color: 'black'}}>Buy</Link>
        </li>
        
      </ul>
      
    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;