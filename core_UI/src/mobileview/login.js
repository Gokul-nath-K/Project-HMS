import React from 'react'
import { Link } from 'react-router-dom'
import './mobile.css';

export default function Loginm() {
  return (
    <>
        <main className="main-content  mt-0">
        <section>
            <div className="page-header min-vh-100 overflow-hidden logincompx">
            <div className="container">
                <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-12 d-flex flex-column mx-lg-0 mx-auto">
                    <div className="card card-plain cardmxz">
                    <div className="card-header pb-0 text-start">
                        <h4 className="font-weight-bolder">Sign In</h4>
                    </div>
                    <div className="card-body">
                        <form>
                        <div className="mb-3">
                            <input type="email" className="form-control form-control-lg" placeholder="Email" aria-label="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control form-control-lg" placeholder="Password" aria-label="Password" />
                        </div>
                        <div className="text-center">
                            <Link to="/home" type="button" className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</Link>
                        </div>
                        </form>
                    </div>
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
