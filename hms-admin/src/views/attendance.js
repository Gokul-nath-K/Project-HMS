import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { getAttByDate } from "../service/attendanceService";

export default function Attendance() {
  
  const [attHistory, setattHistory] = useState([]);
  const [date, setdate] = useState('');
  const admincode = localStorage.getItem('admincode');

  const submitDate = (e) => {
    e.preventDefault();

    console.log(date);
    try {
      getAttByDate(date, admincode).then((res) => {
        setattHistory(res.data);
        console.log(res);
      });
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setdate(value);
  };

  return (
    <>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <h6>Attendance Registry</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="row">
                    <div className="col-6">
                      <form onSubmit={submitDate}>
                        <label for="date" id="label1">
                          Select Date :{" "}
                        </label>
                        <input name="name" type="date" id="date" onChange={handleChange} />
                        <input
                          type="submit"
                          class="btn btn-primary btn-sm mx-2 mb-1"
                        ></input>
                      </form>
                    </div>
                    <div className="col-6">
                      <Link
                        to="/Attendancepop"
                        type="button"
                        class="btn btn-primary btn-sm"
                      >
                        Take Attendance
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-4">
                    <div>
                      <div className="row">
                        <table className="table table-striped table-bordered">
                          <thead style={{ textAlign: "center" }}>
                            <tr>
                              <th> Name</th>
                              <th> Roll-No</th>
                              <th> Block</th>
                              <th> Room-No</th>
                              <th> Attendance</th>
                            </tr>
                          </thead>
                          <tbody
                            style={{ textAlign: "center", color: "black" }}
                          >
                            {attHistory.map((history) => {
                              return (
                                <tr key={history.id}>
                                  <td> {history.name}</td>
                                  <td> {history.rollno}</td>
                                  <td> {history.block} </td>
                                  <td> {history.roomno}</td>
                                  <td> {history.status}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
