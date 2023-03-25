import React from 'react'
import Appbar from './components/appbar'
export default function Attendancem() {
  return (
    <>
    <main className="main-content position-relative border-radius-lg ">
              
              <div className="container-fluid py-4">
                  <div className="row">
                      <div className="col-12">
                          <div className="card mb-4">
                              <div className="card-header pb-0">
                                  <h6>Attendance</h6>
                              </div>
                              <div className="card-body px-0 pt-0 pb-2">
                                  <div className="table-responsive p-0">
                                      <table className="table align-items-center justify-content-center mb-0">
                                          <thead>
                                              <tr>
                                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Roll Number</th>
                                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Action</th>

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

    <Appbar/>
    </>
  )
}
