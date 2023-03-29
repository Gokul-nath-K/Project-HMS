import React, { useEffect, useState } from 'react'
import { NoAnnouncement } from '../components/no_announcement';
import Sidebar from '../components/sidebar';
import Sos from '../components/sos';
// import { userContext } from '../Data/userContext';
import { getAnnouncement, getPercentage, postSOS } from '../services/studentService';

export default function Dashboard() {

    // const { student } = useContext(userContext);
    const [error, setError] = useState({});
    const [announcement, setAnnouncement] = useState([]);
    let [percentage, setPercentage] = useState();
    useEffect(() => {

        let rollno = localStorage.getItem('rollno');
        try {
            getPercentage(rollno).then(res => setPercentage(res.data));
            getAnnouncement().then((res) => { setAnnouncement(res.data); });
        }
        catch (err) {
            console.log(`ERROR : ${err.message}`);
        }
    }, []);


    const student_name = localStorage.getItem('name');
    const student_rollno = localStorage.getItem('rollno');


    const [sosdata, setSosData] = useState({ datetime: "", isactive: false, name: student_name, rollno: student_rollno, reason: "", confirmMessage: "" });

    const resetForm = () => {
        document.getElementById('form-id').reset();
    }
    const handleChange = (e) => {

        e.preventDefault();
        const { name, value } = e.target;

        switch (name) {

            case "reason":
                setSosData({ ...sosdata, reason: value })

                break;

            case "confirm":
                setSosData({ ...sosdata, confirmMessage: value })

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

    }, [sosdata])

    const handleSubmit = (e) => {
        e.preventDefault();


        if (Object.keys(error).length === 0) {

            try {

                postSOS(sosdata).then(resetForm());
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
                            <div className=" col-md-8 col-xl-4 col-sm-8 col-8">
                                <div className="card h-100">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="col-8">
                                                <p className="text-sm mb-3 mt-4 text-uppercase font-weight-bold">Warden</p>
                                                <div className="d-flex flex-column justify-content-start align-items-between">
                                                    <div className="d-flex flex-row justify-content-around">
                                                        <p className="mb-2">
                                                            Name :
                                                        </p>
                                                        <p className="mb-2">
                                                            Name
                                                        </p>
                                                    </div>
                                                    <div className="d-flex flex-row justify-content-around">
                                                        <p className="mb-2">
                                                            Email :
                                                        </p>
                                                        <p className="mb-2">
                                                            Email
                                                        </p>
                                                    </div>
                                                    <div className="d-flex flex-row justify-content-around">
                                                        <p className="mb-2">
                                                            Phno. :
                                                        </p>
                                                        <p className="mb-2">
                                                            Phno.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 text-end">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-8 col-xl-4 col-sm-8 col-8">
                                <div className="card h-100 p-1">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="col">
                                                <p className="mb-3 d-flex justify-content-start">
                                                    ATTENDANCE PERCENTAGE :
                                                </p>
                                                <div className="progress" style={{ height: '35%' }}>
                                                    <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{ width: percentage+"%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{ }</div>
                                                </div>
                                                <div className='mt-2 mb-3 d-flex justify-content-end' >
                                                    <h1 className='display-3 mt-1'> { percentage }% </h1>
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

                                                    <a href="#" style={{
                                                        "display": "inline-block",
                                                        "position": "relative",
                                                        "zIndex": 1,
                                                        "padding": "2em",
                                                        "margin": "-2em"
                                                    }}>
                                                        <button
                                                            type="submit"
                                                            className="btn pt-2 btn-primary "
                                                        >
                                                            Send request
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 mb-4">
                            <div className="col-lg-12 mb-lg-0 mb-4">
                                <div className="card shadow-lg">
                                    <div className="card-header pb-0 p-3" id="announce-bg">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-2">Announcement</h6>
                                        </div>
                                    </div>
                                    <div className="card-body" id="announce-bg">
                                        {
                                            announcement.length === 0 ?

                                                <NoAnnouncement />

                                                :

                                                announcement && announcement.map((announce) => {
                                                    return (

                                                        <div className='col-md-12' key={announce.id}>
                                                            <span className="px-2 d-flex justify-content-start" >{announce.circular}</span>
                                                        </div>
                                                    )
                                                })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main >
            </div >


        </>
    )
}
