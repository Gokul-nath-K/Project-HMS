import React from 'react'
import Sidebar from '../components/sidebar'

export default function Outpass() {
  return (
    <>
        <Sidebar/>
          <main className="main-content position-relative border-radius-lg ">
              
              <div className="container-fluid py-4">
                  <div className="row">
                      <div className="col-12">
                          <div className="card mb-4">
                              <div className="card-header pb-0">
                                  <h6>Outpass Requests</h6>
                              </div>
                              <div className="card-body px-0 pt-0 pb-2">
                                  <div className="table-responsive p-0">
                                      <table className="table align-items-center mb-0">
                                          <thead>
                                              <tr>
                                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-100">Name</th>
                                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Roll-No</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Block</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Room-No</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Out-Date</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">In-Date</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Reason</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                                  {/* <th className="text-secondary opacity-7" /> */}
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>
                                                      {/* <div className="d-flex px-2 py-1"> */}
                                                          <div className="d-flex flex-column align-content-center">
                                                              <h6 className="mb-0 text-sm">John Michael</h6>
                                                          </div>
                                                      {/* </div> */}
                                                  </td>
                                                  <td>
                                                      <h6 className="mb-0">1</h6>
                                                  </td>
                                                  <td className="align-middle text-center text-sm">
                                                     <h6 className="mb-0 text-sm">A</h6>
                                                  </td>
                                                  <td className="align-middle text-center">
                                                      <h6 className='mb-0'>101</h6>
                                                  </td>
                                                  <td className="align-middle">
                                                      {/* <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                          Edit
                                                      </a> */}
                                                    <h6 className='mb-0'>23-03-2023</h6>
                                                  </td>
                                                  <td className="align-middle">
                                                      {/* <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                          Edit
                                                      </a> */}
                                                    <h6 className='mb-0'>24-03-2023</h6>
                                                  </td>
                                                  <td className="align-middle">
                                                      {/* <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                          Edit
                                                      </a> */}
                                                    <h6 className='mb-0'>Movie Night</h6>
                                                  </td>
                                                  <td className="align-middle">
                                                      {/* <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                          Edit
                                                      </a> */}
                                                    <button type="button" class="btn btn-success m-1">Allow</button>
                                                    <button type="button" class="btn btn-danger m-1">Deny</button>
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
              <div className="container-fluid py-4">
                  <div className="row">
                      <div className="col-12">
                          <div className="card mb-4">
                              <div className="card-header pb-0">
                                  <h6>History Of Outpass Requests</h6>
                              </div>
                              <div className="card-body px-0 pt-0 pb-2">
                                  <div className="table-responsive p-0">
                                      <table className="table align-items-center mb-0">
                                          <thead>
                                              <tr>
                                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-100">Name</th>
                                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Roll-No</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Block</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Room-No</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Out-Date</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">In-Date</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Reason</th>
                                                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                                  {/* <th className="text-secondary opacity-7" /> */}
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>
                                                      {/* <div className="d-flex px-2 py-1"> */}
                                                          <div className="d-flex flex-column align-content-center">
                                                              <h6 className="mb-0 text-sm">John Michael</h6>
                                                          </div>
                                                      {/* </div> */}
                                                  </td>
                                                  <td>
                                                      <h6 className="mb-0">1</h6>
                                                  </td>
                                                  <td className="align-middle text-center text-sm">
                                                    <h6 className="mb-0 text-sm">A</h6>
                                                  </td>
                                                  <td className="align-middle text-center">
                                                      <h6 className='mb-0'>101</h6>
                                                  </td>
                                                  <td className="align-middle">
                                                      {/* <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                          Edit
                                                      </a> */}
                                                    <h6 className='mb-0'>23-03-2023</h6>
                                                  </td>
                                                  <td className="align-middle">
                                                      {/* <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                          Edit
                                                      </a> */}
                                                    <h6 className='mb-0'>24-03-2023</h6>
                                                  </td>
                                                  <td className="align-middle">
                                                      {/* <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                          Edit
                                                      </a> */}
                                                    <h6 className='mb-0'>Movie Night</h6>
                                                  </td>
                                                  <td className="align-middle">
                                                      {/* <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                          Edit
                                                      </a> */}
                                                    <h6 className='mb-0'>Allowed</h6>
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
  )
}
