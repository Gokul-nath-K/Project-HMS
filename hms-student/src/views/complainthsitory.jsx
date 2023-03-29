import React, { useEffect, useState } from "react";
import { getComplaintHistory } from "../services/studentService";

function ComplaintHistory() {
    
    const [Complaints, setComplaints] = useState([]);
    
    function fetchcomplaintList(rollno) {

      try {
        getComplaintHistory(rollno).then(res => setComplaints(res.data))
      }
      catch(err) {
        console.log(`ERROR: ${err.message}`);
      }
      
    }
    useEffect(() => {

    let rollno = localStorage.getItem('rollno');
    
    fetchcomplaintList(rollno);
        
    }, []);
    
  return (
    <div>
      <div className="row">
        <div className="col d-flex justify-content-end mb-3">
         <button className="btn btn-primary mx-3" onClick={() => fetchcomplaintList()}> Reload </button>
        </div>
      </div>
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
              <th> Status</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", color: "black" }}>
            { Complaints && Complaints.map((complaint) => {
                return(
                <tr key={complaint.id}>
                  <td> {complaint.name}</td>
                  <td> {complaint.rollno}</td>
                  <td> {complaint.block} </td>
                  <td> {complaint.roomno}</td>
                  <td> {complaint.date}</td>
                  <td> {complaint.time}</td>
                  <td> {complaint.complaint}</td>
                  <td> {complaint.status}</td>
                </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplaintHistory;
