import React from 'react'
import {Link}  from 'react-router-dom'
import axios from "axios";


export default function Login() {

  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  });

  const handleSubmit = async() => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("email", formValue.email)
    loginFormData.append("password", formValue.password)
  
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://localhost:8001/api/signin",
        data: loginFormData,
        headers: { "Content-Type": "application/json" },
      })
      .then(response=>{
        return response.json()
    })
    } catch(error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }
  

  return (
    <>


    <header className="ud-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img src="assets/images/logo/bbwflogo.png" alt="Logo" />
              </a>
              <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
              <span class="toggler-icon"> </span>
                <span class="toggler-icon"> </span>
               
              </button>
              <div className="navbar-collapse" id="navbarSupportedContent">
                <ul id="nav" className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#home">Home</a>
                  </li>

                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#pricing">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#team">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#contact">Contact</a>
                  </li>
                  
                </ul>
              </div>

              <div className="navbar-btn d-none d-sm-inline-block">
                
                <Link className="ud-main-btn ud-white-btn"  to="/signup"> Signup 
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <section className="ud-page-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-banner-content">
              <h1>Login Page</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ud-login">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-login-wrapper">
          
              <form onSubmit={handleSubmit} className="ud-login-form" >
                <div className="ud-form-group">
                  <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formValue.email}
                  onChange={handleChange}
                   
                    
                  />
                </div>
                <div className="ud-form-group">
                  <input
                type="password"
                name="password"
                placeholder="enter a password"
                value={formValue.password}
                onChange={handleChange}
                    
                  />
                </div>
                <div className="ud-form-group">
                  <button   type="submit" className="ud-main-btn w-100">Sign In</button>
                </div>
              </form > 
              <a className="forget-pass" href="javascript:void(0)">
                Forget Password?
              </a>
              <p className="signup-option">
                Not a member yet? <a href="/signup"> Sign Up </a>
              </p>  
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
