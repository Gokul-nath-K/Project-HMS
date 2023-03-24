import React from 'react'
import Sidebar from '../components/sidebar'
import ListOutpassComponent from './outpasslist'
import ListOutpassRequestComponent from './outpassrequest'

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
                                  <div className="table-responsive p-4">
                                    <ListOutpassRequestComponent/>
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
                                  <div className="table-responsive p-4">
                                    <ListOutpassComponent/>
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
