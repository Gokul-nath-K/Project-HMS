import React, { useEffect, useState } from "react";
import { getPendingComplaints, updateComplaint } from '../service/attendanceService'

function ListComplaintRequestComponent() {

  const [complaintReg, setcomplaintReg] = useState([]);

  function complaintApproval(id, status) {
    updateComplaint(status, id).then((res) => fetchComplaintDetails());
  }

  function fetchComplaintDetails( block ) {
    try {
      getPendingComplaints(block).then((res) => setcomplaintReg(res.data));
    }
    catch (err) {
      console.log(`ERROR: ${err.message}`);
    }
  }
  useEffect(() => {

    let block = localStorage.getItem('block');
    fetchComplaintDetails(block);
  }, []);

  return (
    <div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th> Name</th>
              <th> Roll-No</th>
              <th> Block</th>
              <th> Room-No</th>
              <th> Date</th>
              <th> Time</th>
              <th> Complaint</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", color: "black" }}>
            {complaintReg && complaintReg.map((complaint) => {
              return (
                <tr key={complaint.id}>
                  <td> {complaint.name}</td>
                  <td> {complaint.rollno}</td>
                  <td> {complaint.block} </td>
                  <td> {complaint.roomno}</td>
                  <td> {complaint.date}</td>
                  <td> {complaint.time}</td>
                  <td> {complaint.complaint}</td>
                  <td>
                    <button type="button" className="btn btn-success mx-2 btn-sm" onClick={() => complaintApproval(complaint.id, "Solved")}>Solved</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => complaintApproval(complaint.id, "Rejected")}>Rejected</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListComplaintRequestComponent;
