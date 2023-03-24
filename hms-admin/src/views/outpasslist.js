import React, { useEffect, useState } from "react";
import { getAllOutpasses } from '../service/attendanceService'

function ListOutpassComponent() {
    
    const [outpasses, setOutpasses] = useState([]);
    
    useEffect(() => {
          try {
            getAllOutpasses("pending").then((res) => { 
                setOutpasses(res.data);
            })
          }
          catch(err) {
            console.log(`ERROR: ${err.message}`);
          }
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
              <th> Out Date & Time</th>
              <th> In Date & Time</th>
              <th> Reason</th>
              <th> Status</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", color: "black" }}>
            { outpasses.map((outpass) => {
                return(
                <tr key={outpass.id}>
                  <td> {outpass.name}</td>
                  <td> {outpass.rollno}</td>
                  <td> {outpass.block} </td>
                  <td> {outpass.roomno}</td>
                  <td> {outpass.outdt}</td>
                  <td> {outpass.indt}</td>
                  <td> {outpass.reason}</td>
                  <td> {outpass.status}</td>
                </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListOutpassComponent;
