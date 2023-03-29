import React from 'react'
import Sidebar from '../components/sidebar'
import ListComplaintComponent from './complaintlist'
import ListComplaintRequestComponent from './complaintregistry'

export default function Complaint() {
  return (
    <>
    <Sidebar/>
      <main className="main-content position-relative border-radius-lg ">
          
          <div className="container-fluid py-4">
              <div className="row">
                  <div className="col-12">
                      <div className="card mb-4">
                          <div className="card-header pb-0">
                              <h6>Complaints</h6>
                          </div>
                          <div className="card-body px-0 pt-0 pb-2">
                              <div className="table-responsive p-4">
                                 <ListComplaintRequestComponent/>
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
                              <h6>History Of Complaints</h6>
                          </div>
                          <div className="card-body px-0 pt-0 pb-2">
                              <div className="table-responsive p-4">
                                  <ListComplaintComponent />
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
