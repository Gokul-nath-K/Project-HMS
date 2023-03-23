import React from 'react'
import Sidebar from '../components/sidebar';

export default function Dashboard() {
    return (
        <>
            <Sidebar />
            <main className="main-content position-relative border-radius-lg ">
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className=" col-8">
                            <div className="row">
                                <div className="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                                    <div className="card">
                                        <div className="card-body p-3">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="numbers">
                                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Money</p>
                                                        <h5 className="font-weight-bolder">
                                                            $53,000
                                                        </h5>
                                                        <p className="mb-0">
                                                            <span className="text-success text-sm font-weight-bolder">+55%</span>
                                                            since yesterday
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-4 text-end">
                                                    <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                                        <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true" />
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
                                <div className="col-xl-6 col-sm-6 mb-xl-0 mb-4 mt-3">
                                    <div className="card">
                                        <div className="card-body p-3">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="numbers">
                                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">New Clients</p>
                                                        <h5 className="font-weight-bolder">
                                                            +3,462
                                                        </h5>
                                                        <p className="mb-0">
                                                            <span className="text-danger text-sm font-weight-bolder">-2%</span>
                                                            since last quarter
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-4 text-end">
                                                    <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                                        <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-6 mt-3">
                                    <div className="card">
                                        <div className="card-body p-3">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="numbers">
                                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Sales</p>
                                                        <h5 className="font-weight-bolder">
                                                            $103,430
                                                        </h5>
                                                        <p className="mb-0">
                                                            <span className="text-success text-sm font-weight-bolder">+5%</span> than last month
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-4 text-end">
                                                    <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                                                        <i className="ni ni-cart text-lg opacity-10" aria-hidden="true" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card h-100 bg-danger">
                                <div className="p-2 mx-5 mt-5 rounded">
                                    <h1 className="text-center text-white p-2">SOS</h1>
                                    <h1 className="text-center heart">🤍</h1>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="row mt-4 mb-4">
                        <div className="col-lg-12 mb-lg-0 mb-4">
                            <div className="card ">
                                <div className="card-header pb-0 p-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-2">Announcement</h6>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className='col-md-12'>
                                        <span className="px-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aperiam pariatur odio, perspiciatis, sunt id nisi laborum debitis nemo error tenetur facilis magni! In dolorum iure vero excepturi autem veniam.</span>
                                    </div>
                                    <div className='col-md-12'>
                                        <span className="px-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aperiam pariatur odio, perspiciatis, sunt id nisi laborum debitis nemo error tenetur facilis magni! In dolorum iure vero excepturi autem veniam.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}
