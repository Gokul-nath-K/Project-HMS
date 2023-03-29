import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/sidebar';
import { userContext } from '../Data/userContext';
import { complainCount, outpassCount, sosCount, studentCount } from '../service/attendanceService';

export default function Dashboard() {

    var [date, setDate] = useState(new Date());

    useEffect( () => {
        var timer = setInterval( () => setDate( new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });
    
    let adminCode;

    let [student_count, setStudentCount] = useState();
    let [pending_outpass, setPendingOutpass] = useState();;
    let [pending_complaint, setPendingComplaint] = useState();
    let [pending_sos, setPendingSOS] = useState();
    const { admin, setAdmin } = useContext(userContext);
    
    localStorage.setItem("block", admin.block);

    useEffect(() => {

        adminCode = localStorage.getItem('admincode');

        try {

            studentCount(adminCode).then((res) => setStudentCount(res.data[0]));
            complainCount(adminCode).then((res) => setPendingComplaint(res.data[0]));
            outpassCount(adminCode).then((res) => setPendingOutpass(res.data[0]));
            sosCount(adminCode).then((res) => setPendingSOS(res.data[0]));

        }
        catch (err) {
            console.log(err);
        }

    }, [adminCode])

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
                                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Total No. of Students</p>
                                                        <h5 className="font-weight-bolder">
                                                            {student_count}
                                                        </h5>
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
                                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Pending Outpass Requests</p>
                                                        <h5 className="font-weight-bolder">
                                                            {pending_outpass}
                                                        </h5>
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
                                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Pending Complaints</p>
                                                        <h5 className="font-weight-bolder">
                                                            {pending_complaint}
                                                        </h5>
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
                                                        <p className="text-sm mb-0 text-uppercase font-weight-bold">SOS</p>
                                                        <h5 className="font-weight-bolder">
                                                            {pending_sos}
                                                        </h5>
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
                                <div className="p-3 mx-5 mt-4 rounded">
                                    <h4 className="text-center text-white p-2">Time : {date.toLocaleTimeString()}</h4>
                                    <h4 className="text-center text-white p-2">Date : {date.toLocaleDateString()}</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-7 mb-4">
                        <div className="col-lg-12 mb-lg-0 mb-4">
                            <div className="card ">
                                <div className="card-header pb-0 p-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-2">Announcements</h6>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center ">
                                        <tbody>
                                            <tr>
                                                <td className="w-30">
                                                    <div className="d-flex px-2 py-1 align-items-center">
                                                        <div className="ms-4">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                    </div>
                                                </td>
                                                <td className="align-middle text-sm">
                                                    <div className="col text-center">
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30">
                                                    <div className="d-flex px-2 py-1 align-items-center">
                                                        <div className="ms-4">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        {/* <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                                        <h6 className="text-sm mb-0">3.900</h6> */}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        {/* <p className="text-xs font-weight-bold mb-0">Value:</p>
                                                        <h6 className="text-sm mb-0">$440,000</h6> */}
                                                    </div>
                                                </td>
                                                <td className="align-middle text-sm">
                                                    <div className="col text-center">
                                                        {/* <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                                        <h6 className="text-sm mb-0">40.22%</h6> */}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30">
                                                    <div className="d-flex px-2 py-1 align-items-center">
                                                        <div className="ms-4">
                                                            {/* <p className="text-xs font-weight-bold mb-0">Country:</p>
                                                            <h6 className="text-sm mb-0">Great Britain</h6> */}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        {/* <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                                        <h6 className="text-sm mb-0">1.400</h6> */}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        {/* <p className="text-xs font-weight-bold mb-0">Value:</p>
                                                        <h6 className="text-sm mb-0">$190,700</h6> */}
                                                    </div>
                                                </td>
                                                <td className="align-middle text-sm">
                                                    <div className="col text-center">
                                                        {/* <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                                        <h6 className="text-sm mb-0">23.44%</h6> */}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30">
                                                    <div className="d-flex px-2 py-1 align-items-center">
                                                        <div className="ms-4">
                                                            {/* <p className="text-xs font-weight-bold mb-0">Country:</p>
                                                            <h6 className="text-sm mb-0">Brasil</h6> */}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        {/* <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                                        <h6 className="text-sm mb-0">562</h6> */}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        {/* <p className="text-xs font-weight-bold mb-0">Value:</p>
                                                        <h6 className="text-sm mb-0">$143,960</h6> */}
                                                    </div>
                                                </td>
                                                <td className="align-middle text-sm">
                                                    <div className="col text-center">
                                                        {/* <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                                        <h6 className="text-sm mb-0">32.14%</h6> */}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}
