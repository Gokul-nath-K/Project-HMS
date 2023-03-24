import React, { useEffect, useState } from "react";
import { getPendingOutpasses, updateOutpasses } from '../service/attendanceService'
import { useNavigate } from "react-router-dom";

function ListOutpassRequestComponent() {
    // const navigate = useNavigate();
    const [outpasses, setOutpasses] = useState([]);
    
    function Updateoutpass( status, id ) {
        try{
            updateOutpasses( status, id ).then((res) => { console.log( res ); });
            
            // navigate('/');
        }
        catch(err){
            console.log(`ERROR: ${err.message}`);
        }   
        console.log('hl')
        // window.location.reload(false);
        
    }

    useEffect(() => {
          try {
            getPendingOutpasses("pending").then((res) => { 
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
              <th> Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", color: "black" }}>
            { outpasses && outpasses.map((outpass) => {
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
                    <button type="button" class="btn btn-success mx-2 btn-sm" onClick={Updateoutpass("Allowed",outpass.id)}>Allow</button>
                    <button type="button" class="btn btn-danger btn-sm" onClick={Updateoutpass("Denied",outpass.id)}>Deny</button>
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
