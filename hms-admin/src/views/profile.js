import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/sidebar';
import { userContext } from '../Data/userContext';
import { getAdmin } from '../service/attendanceService';

export default function Profile() {

    const admincode = localStorage.getItem('admincode');
    const { admin, setAdmin } = useContext(userContext);

    useEffect(() => {

        
    }, [admincode]);
    return (
        <>
            <Sidebar />
            <main className="main-content position-relative border-radius-lg">
                <span className="mt-4 d-hidden">&nbsp;</span>
                <div className="card shadow-lg mx-4">
                    <div className="card-body p-3 mt">
                        <div className="row gx-4">
                            <div className="col-auto">
                                {/* <div className="avatar avatar-xl position-relative">
                        <img src="https://ik.imagekit.io/gokul/hms/marie.jpg?updatedAt=1679381623884" alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                    </div> */}
                            </div>
                            <div className="col-auto my-auto">
                                <div className="h-100">
                                    <h5 className="mb-1">
                                        { admin.name }
                                    </h5>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                    <div className="nav-wrapper position-relative end-0">
                        <ul className="nav nav-pills nav-fill p-1" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link mb-0 px-0 py-1 active d-flex align-items-center justify-content-center " data-bs-toggle="tab" href="#" role="tab" aria-selected="true">
                            <i className="ni ni-app" />
                            <span className="ms-2">App</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center " data-bs-toggle="tab" href="#" role="tab" aria-selected="false">
                            <i className="ni ni-email-83" />
                            <span className="ms-2">Messages</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center " data-bs-toggle="tab" href="#" role="tab" aria-selected="false">
                            <i className="ni ni-settings-gear-65" />
                            <span className="ms-2">Settings</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div> */}
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header pb-0">
                                    <div className="d-flex align-items-center">
                                        <p className="mb-0">My Profile</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="text-uppercase text-sm">User Information</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Name</label>
                                                <input className="form-control" type="text" value={!admin ? "Name" : admin.name} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Block</label>
                                                <input className="form-control" type="text" value={!admin ? "Block" : admin.block} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Admin - Code</label>
                                                <input className="form-control" type="text" value={!admin ? "code" : admin.block} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Blood - Group</label>
                                                <input className="form-control" type="text" value={!admin ? "Blood group" : admin.bloodgroup} />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="horizontal dark" />
                                    <p className="text-uppercase text-sm">Contact Information</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Phone</label>
                                                <input className="form-control" type="text" value={!admin ? "Ph no." : admin.personal_phone} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Email address</label>
                                                <input className="form-control" type="email" value={!admin ? "Email" : admin.email} />
                                            </div>
                                        </div>
                                        {/* <div className="col-md-4">
                            <div className="form-group">
                            <label htmlFor="example-text-input" className="form-control-label">City</label>
                            <input className="form-control" type="text" defaultValue="New York" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label htmlFor="example-text-input" className="form-control-label">Country</label>
                            <input className="form-control" type="text" defaultValue="United States" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <label htmlFor="example-text-input" className="form-control-label">Postal code</label>
                            <input className="form-control" type="text" defaultValue={437300} />
                            </div>
                        </div> */}
                                    </div>
                                    {/* <hr className="horizontal dark" />
                        <p className="text-uppercase text-sm">About me</p>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label htmlFor="example-text-input" className="form-control-label">About me</label>
                            <input className="form-control" type="text" defaultValue="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source." />
                            </div>
                        </div>
                        </div> */}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>


        </>
    )
}
