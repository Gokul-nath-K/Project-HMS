import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
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
                        <form>
                        <div className="mb-3">
                            <input type="email" className="form-control form-control-lg" placeholder="Email" aria-label="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control form-control-lg" placeholder="Password" aria-label="Password" />
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div className="text-center">
                            <Link to="/dashboard" type="button" className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</Link>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                    <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style={{backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg")', backgroundSize: 'cover'}}>
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
