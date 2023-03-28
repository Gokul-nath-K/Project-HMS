import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar'
import { getAttendance, postAttendance } from '../service/attendanceService';

export default function Attendancepop() {

  const [attendance, setAttendance] = useState([]);
  const studentAttendance = { name: "", rollno: "", block: '', roomno: '', status: "", date: "" };
  const admincode = localStorage.getItem('admincode');
  const [studentlist, setStudentList] = useState([]);

  useEffect(() => {

    try {
      getAttendance(admincode).then((res) => { setStudentList(res.data) })
    }
    catch (err) {
      console.log(err);
    }

  }, []);

  const handleChange = (id, statusChecked) => (e) => {
    // e.preventDefault();


    studentlist.map((stud) => {

      if (stud.rollno == id) {

        studentAttendance.name = stud.name;
        studentAttendance.rollno = stud.rollno;
        studentAttendance.block = stud.block;
        studentAttendance.roomno = stud.roomno;
        studentAttendance.status = statusChecked;

      }

    })

    setAttendance(attendance => [...attendance, studentAttendance]);
  };


  const navigate = useNavigate();

  function handleSubmitAttendance() {

    postAttendance(attendance).then( navigate('/attendance'))
  }
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="row">
                  <div className="col-12">
                    <div className="card mb-4">
                      <div className="card-header pb-0">
                        <h6>Register Attendance</h6>
                      </div>
                      <div className="card-body px-0 pt-0 pb-2">
                        <div className="table-responsive p-0">
                          <table className="table align-items-center mb-0">
                            <thead>
                              <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                  Name
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                  Roll-No
                                </th>
                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                  Block
                                </th>
                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                  Room-No
                                </th>
                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                  Attendance
                                </th>
                                <th className="text-secondary opacity-7" />
                              </tr>
                            </thead>
                            <tbody>
                              {
                                studentlist && studentlist.map((student) => {
                                  return (
                                    <tr key={student.rollno}>
                                      <td>
                                        <div className="d-flex flex-column align-content-center">
                                          <h6 className="mb-0 text-sm">{student.name}</h6>
                                        </div>
                                      </td>
                                      <td>
                                        < h6 className="mb-0 text-sm">{student.rollno}</h6>
                                      </td>
                                      <td className="align-middle text-center text-sm">
                                        <h6 className="mb-0 text-sm">{student.block}</h6>
                                      </td>
                                      <td className="align-middle text-center">
                                        <h6 className="mb-0 text-sm">{student.roomno}</h6>
                                      </td>
                                      <td className="align-middle">
                                        <div>
                                          <div>
                                            <input type="checkbox" className='mx-4' onChange={handleChange(student.rollno, "present")} ></input>
                                            <input type="checkbox" className='mx-4' onChange={handleChange(student.rollno, "absent")} ></input>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <button type="button" onClick={() => handleSubmitAttendance()} className="btn btn-success">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
