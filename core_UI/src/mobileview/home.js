import React from 'react'
import Appbar from './components/appbar'
export default function Homem() {
  return (
    <>

    <main className="main-content position-relative border-radius-lg ">
        <div className="container-fluid py-4">
            <div className="row" style={{ '--bs-gutter-x': '0rem'}}>
                <div className="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="numbers">
                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Users</p>
                                        <h5 className="font-weight-bolder">
                                            2,300
                                        </h5>
                                        <p className="mb-0">
                                            <span className="text-success text-sm font-weight-bolder">+3%</span>
                                            since last week
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                        <i className="ni ni-world text-lg opacity-10" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                    <div className="numbers">
                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Users</p>
                                        <h5 className="font-weight-bolder">
                                            2,300
                                        </h5>
                                        <p className="mb-0">
                                            <span className="text-success text-sm font-weight-bolder">+3%</span>
                                            since last week
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                        <i className="ni ni-world text-lg opacity-10" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>        
    <Appbar/>
    </>
  )
}
