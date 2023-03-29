import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { getAllSoss } from '../service/attendanceService'

function ListSosComponent() {
    
    const [Soss, setSoss] = useState([]);
    
    function fetchSosList() {
    
      try {
        getAllSoss().then((res) => { 
          setSoss(res.data);
          console.log(res);
        })
      }
      catch(err) {
        console.log(`ERROR: ${err.message}`);
      }
      
    }
    useEffect(() => {
      
        fetchSosList();
        
    }, []);
    
  return (
      <div>
      <div className="row">
        {/* <div className="col d-flex justify-content-end mb-3">
         <button className="btn btn-primary mx-3" onClick={fetchSosList()}> Reload </button>
        </div> */}
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th> Name</th>
              <th> Roll-No</th>
              <th> Block</th>
              <th> Room-No</th>
              <th> Date & Time</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", color: "black" }}>
            { Soss && Soss.map((Sos) => {
                return(
                <tr key={Sos.id}>
                  <td> {Sos.name}</td>
                  <td> {Sos.rollno}</td>
                  <td> {Sos.block} </td>
                  <td> {Sos.roomno}</td>
                  <td> {Sos.datetime}</td>
                </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListSosComponent;
