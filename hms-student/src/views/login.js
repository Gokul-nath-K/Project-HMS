import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';
import { loginUser } from '../services/login';
export default function Login() {

    const [user, setUser] = useState({});

    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handlechange = (e) => {

        e.preventDefault()
        const { name, value } = e.target;

        switch (name) {

            case 'rollno':
                setUser({ ...user, rollno: value });

                break;

            case 'email':
                setUser({ ...user, email: value });

                break;

            case 'password':
                setUser({ ...user, password: value });

                break;

            default:
                break;
        }
    }

    const validateForm = (value) => {
        const errors = {};
        const emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        const passwordPattern = /^(?=.*[0-9])(?=.*[a-z]).{8,32}$/

        if (!value.rollno) {
            errors.rollno = "Please enter register number"
        }

        if (!value.email) {
            errors.email = "Please enter email id"
        }
        else if (!emailPattern.test(value.email)) {
            errors.email = 'Enter valid email'
        }

        if (!value.password) {
            errors.password = "Please enter password"
        }
        else if (!passwordPattern.test(value.password)) {
            errors.password = 'Enter valid password'
        }


        return errors;
    }
    useEffect(() => {

        setError(validateForm(user));

    }, [user])


    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            if (Object.keys(error).length === 0) {

                loginUser(user).then((res) => {

                    if (res.data) {

                        localStorage.setItem("rollno", user.rollno);
                        localStorage.setItem("email", user.email);
                        localStorage.setItem("password", user.password);

                    }
                    else {
                        
                        alert('Invalid email and password')
                    }

                })
            }
        }
        catch (err) {
            console.log(`Error: ${err.message}`);
        }
        
        navigate('/dashboard')
    }
    return (
        <>
            <main className="main-content  mt-0">
                <section>
                    <div className="page-header min-vh-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                                    <div className="card card-plain">
                                        <div className="card-header pb-0 text-start">
                                            <h4 className="font-weight-bolder">Sign In</h4>
                                            <p className="mb-0">Enter your email and password to sign in</p>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <input type="text" name='rollno' onChange={handlechange} className="form-control form-control-lg" placeholder="Roll no" aria-label="Roll no" />
                                                    <span style={{ color: 'red', fontSize: 'small', textAlign: 'start', display: 'flex', padding: 4, paddingLeft: 10 }} > {error.rollno} </span>
                                                </div>
                                                <div className="mb-3">
                                                    <input type="email" name='email' onChange={handlechange} className="form-control form-control-lg" placeholder="Email" aria-label="Email" />
                                                    <span style={{ color: 'red', fontSize: 'small', textAlign: 'start', display: 'flex', padding: 4, paddingLeft: 10 }}> {error.email} </span>
                                                </div>
                                                <div className="mb-3">
                                                    <input type="password" name='password' onChange={handlechange} className="form-control form-control-lg" placeholder="Password" aria-label="Password" />
                                                    <span style={{ color: 'red', fontSize: 'small', textAlign: 'start', display: 'flex', padding: 4, paddingLeft: 10 }}> {error.password} </span>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                                    <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style={{ backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg")', backgroundSize: 'cover' }}>
                                        <span className="mask bg-gradient-primary opacity-6" />
                                        <h4 className="mt-5 text-white font-weight-bolder position-relative">"Attention is the new currency"</h4>
                                        <p className="text-white position-relative">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}
