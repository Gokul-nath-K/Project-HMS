import React from "react";
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
                  <h6>Attendance List</h6>
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
                            <p className="text-xs font-weight-bold mb-0">1</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              A
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              101
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              11-03-2023
                            </span>
                          </td>
                          <td className="align-middle">
                            <button type="button" class="btn btn-success m-1">Present</button>
                            <button type="button" class="btn btn-danger m-1">Absent</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                  <div className="row">
                    <div className="col-md-12 ">
                        <div className="d-flex justify-content-center">
                      <h6>Select Date :</h6>
                      <input type="date" />
                      </div>
                    </div>
                    {/* <div className='col-2'>
                                    </div>   */}
                  </div>
                  {/* <div className="table-responsive p-0">
                                      <table className="table align-items-center justify-content-center mb-0">
                                          <thead>
                                              <tr>
                                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Project</th>
                                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Completion</th>
                                                  <th />
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>
                                                      <div className="d-flex px-2">
                                                          <div className="my-auto">
                                                              <h6 className="mb-0 text-sm">Spotify</h6>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <p className="text-sm font-weight-bold mb-0">$2,500</p>
                                                  </td>
                                                  <td>
                                                      <span className="text-xs font-weight-bold">working</span>
                                                  </td>
                                                  <td className="align-middle text-center">
                                                      <div className="d-flex align-items-center justify-content-center">
                                                          <span className="me-2 text-xs font-weight-bold">60%</span>
                                                          <div>
                                                              <div className="progress">
                                                                  <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }} />
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="align-middle">
                                                      <button className="btn btn-link text-secondary mb-0">
                                                          <i className="fa fa-ellipsis-v text-xs" />
                                                      </button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="d-flex px-2">
                                                          <div className="my-auto">
                                                              <h6 className="mb-0 text-sm">Invision</h6>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <p className="text-sm font-weight-bold mb-0">$5,000</p>
                                                  </td>
                                                  <td>
                                                      <span className="text-xs font-weight-bold">done</span>
                                                  </td>
                                                  <td className="align-middle text-center">
                                                      <div className="d-flex align-items-center justify-content-center">
                                                          <span className="me-2 text-xs font-weight-bold">100%</span>
                                                          <div>
                                                              <div className="progress">
                                                                  <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }} />
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="align-middle">
                                                      <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                          <i className="fa fa-ellipsis-v text-xs" />
                                                      </button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="d-flex px-2">
                                                          <div className="my-auto">
                                                              <h6 className="mb-0 text-sm">Jira</h6>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <p className="text-sm font-weight-bold mb-0">$3,400</p>
                                                  </td>
                                                  <td>
                                                      <span className="text-xs font-weight-bold">canceled</span>
                                                  </td>
                                                  <td className="align-middle text-center">
                                                      <div className="d-flex align-items-center justify-content-center">
                                                          <span className="me-2 text-xs font-weight-bold">30%</span>
                                                          <div>
                                                              <div className="progress">
                                                                  <div className="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={30} style={{ width: '30%' }} />
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="align-middle">
                                                      <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                          <i className="fa fa-ellipsis-v text-xs" />
                                                      </button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="d-flex px-2">
                                                          <div className="my-auto">
                                                              <h6 className="mb-0 text-sm">Slack</h6>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <p className="text-sm font-weight-bold mb-0">$1,000</p>
                                                  </td>
                                                  <td>
                                                      <span className="text-xs font-weight-bold">canceled</span>
                                                  </td>
                                                  <td className="align-middle text-center">
                                                      <div className="d-flex align-items-center justify-content-center">
                                                          <span className="me-2 text-xs font-weight-bold">0%</span>
                                                          <div>
                                                              <div className="progress">
                                                                  <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={0} style={{ width: '0%' }} />
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="align-middle">
                                                      <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                          <i className="fa fa-ellipsis-v text-xs" />
                                                      </button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="d-flex px-2">
                                                          <div className="my-auto">
                                                              <h6 className="mb-0 text-sm">Webdev</h6>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <p className="text-sm font-weight-bold mb-0">$14,000</p>
                                                  </td>
                                                  <td>
                                                      <span className="text-xs font-weight-bold">working</span>
                                                  </td>
                                                  <td className="align-middle text-center">
                                                      <div className="d-flex align-items-center justify-content-center">
                                                          <span className="me-2 text-xs font-weight-bold">80%</span>
                                                          <div>
                                                              <div className="progress">
                                                                  <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={80} style={{ width: '80%' }} />
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="align-middle">
                                                      <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                          <i className="fa fa-ellipsis-v text-xs" />
                                                      </button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="d-flex px-2">
                                                          <div className="my-auto">
                                                              <h6 className="mb-0 text-sm">Adobe XD</h6>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <p className="text-sm font-weight-bold mb-0">$2,300</p>
                                                  </td>
                                                  <td>
                                                      <span className="text-xs font-weight-bold">done</span>
                                                  </td>
                                                  <td className="align-middle text-center">
                                                      <div className="d-flex align-items-center justify-content-center">
                                                          <span className="me-2 text-xs font-weight-bold">100%</span>
                                                          <div>
                                                              <div className="progress">
                                                                  <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }} />
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="align-middle">
                                                      <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                          <i className="fa fa-ellipsis-v text-xs" />
                                                      </button>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
