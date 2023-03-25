import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/sidebar';
import Sos from '../components/sos';
import { userContext } from '../Data/userContext';
import { postSOS } from '../services/studentService';

export default function Dashboard() {

    const { student } = useContext(userContext);
    const [error, setError] = useState({});

    const student_name = localStorage.getItem('name');
    const student_rollno = localStorage.getItem('rollno');


    const [sosdata, setSosData] = useState({ datetime: "", isactive: false, name: student_name, reason: "", rollno: student_rollno, reason: "", confirmMessage: "" });
    console.log(sosdata);

    const resetForm = () => {
        document.getElementById('form-id').reset();
    }
    const handleChange = (e) => {

        e.preventDefault();
        const { name, value } = e.target;

        switch (name) {

            case "reason":
                setSosData({ ...sosdata, reason: value })
                console.log(sosdata.reason);

                break;

            case "confirm":
                setSosData({ ...sosdata, confirmMessage: value })
                console.log(sosdata.confirmInput);

                break;

            default:
                break;
        }


    }

    const validateForm = (value) => {
        const errors = {};

        if (value.confirmMessage !== "confirm") {
            errors.confirm = "Please enter confirm";
        }

        return errors;
    };

    useEffect(() => {

        setError(validateForm(sosdata))

    }, [sosdata.confirmMessage])

    const handleSubmit = (e) => {
        e.preventDefault();


        if (Object.keys(error).length === 0) {

            try {

                postSOS(sosdata).then();
            }
            catch (err) {
                console.log(`ERROR : ${err.message}`);
            }
        }
    }


    return (
        <>
            <div className="g-sidenav-show   bg-gray-100">
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
                                    <div className="col-xl-6 col-sm-6 mt-3 mb-xl-0 mb-4">
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
                            <div className="col-md-8 col-xl-4 col-sm-8 col-8">
                                <a href="#open-modal"> <Sos /> </a>
                                <div id="open-modal" className="modal-window">
                                    <div>
                                        <a href="#" title="Close" onClick={resetForm} className="modal-close">Close</a>
                                        <form onSubmit={handleSubmit} id='form-id'>
                                            <div className='row'>
                                                <div className="col mx-8">
                                                    <div className="form-group">
                                                        <label className='d-flex align-item-start'>What kind of emergency:</label>
                                                        <select
                                                            name="reason"
                                                            className="form-control"
                                                            onChange={handleChange}
                                                            //   value={sosdata.reason}
                                                            defaultValue="--Reason--"
                                                        >
                                                            <option value="--Reason--" disabled>
                                                                --Reason--
                                                            </option>
                                                            <option value="A">A</option>
                                                            <option value="B">B</option>
                                                            <option value="C">C</option>
                                                            <option value="D">D</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col mx-8">
                                                    <div className="form-group">
                                                        <label className='d-flex align-item-start'>To send SOS, enter confirm in the text input field.</label>
                                                        <input
                                                            type="text"
                                                            name="confirm"
                                                            className="form-control"
                                                            onChange={handleChange}
                                                            placeholder="confirm"
                                                        />
                                                        <span
                                                            style={{
                                                                color: "red",
                                                                fontSize: "small",
                                                                textAlign: "start",
                                                                display: "flex",
                                                                padding: 4,
                                                                paddingLeft: 10,
                                                                justifyContent: "flex-end"
                                                            }}
                                                        >
                                                            {error.confirm}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <button
                                                        type="submit"
                                                        className="btn pt-2 btn-primary "
                                                    >
                                                        Send request
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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
            </div>


        </>
    )
}
