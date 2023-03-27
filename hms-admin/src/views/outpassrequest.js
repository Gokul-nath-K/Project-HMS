import React, { useEffect, useState } from "react";
import { getPendingOutpasses, updateOutpass } from '../service/attendanceService'

function ListOutpassRequestComponent() {

    const [outpassReqs, setOutpassReqs] = useState([]);
    

    function Allowoutpass( id ) {
        updateOutpass( id, "Allowed" ).then((res) => { console.log( res.data ); });  
    }

    function Denyoutpass( id ) {
      updateOutpass( id, "Denied" ).then((res) => { console.log( res.data ); });  
  }

    useEffect(() => {
          try {
            getPendingOutpasses("pending").then((res) => { 
                setOutpassReqs(res.data);
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
              <th> Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", color: "black" }}>
            { outpassReqs && outpassReqs.map((outpass) => {
                return(
                <tr key={outpass.id}>
                  <td> {outpass.name}</td>
                  <td> {outpass.rollno}</td>
                  <td> {outpass.block} </td>
                  <td> {outpass.roomno}</td>
                  <td> {outpass.outdt}</td>
                  <td> {outpass.indt}</td>
                  <td> {outpass.reason}</td>
                  <td>
                    <button type="button" className="btn btn-success mx-2 btn-sm" onClick={Allowoutpass(outpass.id)}>Allow</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={Denyoutpass(outpass.id)}>Deny</button>
                    {/* <input type="radio"/> */}
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

export default ListOutpassRequestComponent;
