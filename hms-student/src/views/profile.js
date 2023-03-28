import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/sidebar';
import { userContext } from '../Data/userContext';
import { getStudent } from '../services/studentService';


export default function Profile() {

    const rollno = localStorage.getItem('rollno');
    const { student, setStudent } = useContext(userContext);

    useEffect(() => {

        try {
          getStudent(rollno).then((res) => {
                setStudent(res.data);
          })
        }
        catch (err) {
          console.log(`Error: ${err.message}`);
        }
      }, [rollno]);

    return (
        <>
            <Sidebar />
            <main className="main-content position-relative border-radius-lg max-height-vh-100 h-100">
                <span className="mt-4 d-hidden">&nbsp;</span>
                <div className="card shadow-lg mx-4 card-profile-bottom ">
                    <div className="card-body p-3 mt">
                        <div className="row gx-4">
                            <div className="col-auto">
                                <div className="avatar avatar-xl position-relative">
                                    <img src="https://ik.imagekit.io/gokul/hms/student-going-to-college-flat-illustration-free-vector.jpg?updatedAt=1679481619212" alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                                </div>
                            </div>
                            <div className="col-auto my-auto">
                                <div className="h-100">
                                    <h5 className="mb-1">
                                        {localStorage.getItem('rollno')}
                                    </h5>
                                    <p className="mb-0 font-weight-bold text-sm">
                                        Hostler
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                <div className="nav-wrapper position-relative end-0">
                                    {/* <ul className="nav nav-pills nav-fill p-1" role="tablist">
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
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header pb-0">
                                    <div className="d-flex align-items-center">
                                        {/* <p className="mb-0">Edit Profile</p> */}
                                        {/* <button className="btn btn-primary btn-sm ms-auto">Settings</button> */}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="text-uppercase text-sm">User Information</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Name of the student</label>
                                                <input className="form-control" type="text" value={!student ? "Name" : student.name} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Date of birth</label>
                                                <input className="form-control" type="text" value={!student ? "dd/MM/yyyy" : student.dob} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Year</label>
                                                <input className="form-control" type="text" value={!student ? "Year" : student.year} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Departent</label>
                                                <input className="form-control" type="text" value={!student ? "Department" : student.dept} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Block</label>
                                                <input className="form-control" type="text" value={!student ? "Block" : student.block} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Room no.</label>
                                                <input className="form-control" type="text" value={!student ? "Room no." : student.roomno} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Blood group</label>
                                                <input className="form-control" type="text" value={!student ? "Blood group" : student.bloodgroup} />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="horizontal dark pt" />
                                    <p className="text-uppercase text-sm p-2">Contact Information</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Parent / guardian Ph-no.</label>
                                                <input className="form-control" type="text" value={!student ? "Parents / gaurdian phno." : student.guardian_phone} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Phone number</label>
                                                <input className="form-control" type="text" value={!student ? "Personal phno." : student.personal_phone} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">Email address</label>
                                                <input className="form-control" type="email" value={!student ? "Email address" : student.email} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <hr className="horizontal dark" />
                                    <p className="text-uppercase text-sm">About me</p>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="example-text-input" className="form-control-label">About me</label>
                                                <input className="form-control" type="text" defaultValue="Athala nee yean kekura, yean kekura, nee keka kudathu 🤨" />
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
