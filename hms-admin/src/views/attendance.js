import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function Attendance() {
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
                    <div className="col-md-12 ">
                      <div className="d-flex justify-content-center mid-center">
                        {/* <h6>Select Date :</h6>
                        <input type="date" /> */}
                        <Link to='/add' class="btn btn-primary">Take Attendance</Link>                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <h6>Attendance History</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-100">
                            Name
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Roll-No
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Block
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Room-No
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Date
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Attendance
                          </th>
                          <th className="text-secondary opacity-7" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex flex-column align-content-center">
                              <h6 className="mb-0 text-sm">John Michael</h6>
                            </div>
                          </td>
                          <td>
                          < h6 className="mb-0 text-sm">727821TUAD001</h6>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <h6 className="mb-0 text-sm">A</h6>
                          </td>
                          <td className="align-middle text-center">
                            <h6 className="mb-0 text-sm">101</h6>
                          </td>
                          <td className="align-middle text-center">
                            <h6 className="mb-0 text-sm">11-03-2023</h6>
                          </td>
                          <td className="align-middle">
                            <h6>Present</h6>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
