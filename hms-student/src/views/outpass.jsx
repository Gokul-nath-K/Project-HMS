import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { postOutpass } from "../services/studentService";

export default function Outpass() {
  const [outpass, setOutpass] = useState({
    name: "",
    rollno: "",
    block: "",
    roomno: "",
    outdt: "",
    indt: "",
    reason: "",
    status: "pending",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    switch (name) {
      case "name":
        setOutpass({ ...outpass, name: value });

        break;
      case "rollno":
        setOutpass({ ...outpass, rollno: value });

        break;

      case "block":
        setOutpass({ ...outpass, block: value });

        break;

      case "room":
        setOutpass({ ...outpass, roomno: value });

        break;

      case "dateout":
        setOutpass({ ...outpass, outdt: value });

        break;

      case "datein":
        setOutpass({ ...outpass, indt: value });

        break;

      case "reason":
        setOutpass({ ...outpass, reason: value });

        break;

      default:
        break;
    }
  };

  const validateForm = (value) => {
    const errors = {};

    if (!value.name) {
      errors.name = "Please enter name";
    }

    if (!value.rollno) {
      errors.rollno = "Please enter register number";
    }

    if (value.block === "") {
      errors.block = "Please select block";
    }

    if (!value.roomno) {
      errors.room = "Please enter room number";
    }

    if (!value.reason) {
      errors.reason = "Please enter room number";
    }

    return errors;
  };

  useEffect(() => {
    setError(validateForm(outpass));
  }, [outpass]);

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(error).length === 0) {
      postOutpass(outpass).then(document.getElementById("form-id").reset());
    } else {
      console.log("enter valid form details");
    }

    navigate("/history");

  };

  return (
    <>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-header pb-0">
                  <div className="text-uppercase text-sm d-flex align-items-start pb-3">
                    <p className="mb-0">hosteller outpass form</p>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit} id='form-id'>
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6 p-2 px-3">
                          <div className="form-group">
                            <label htmlFor="form_name">Name </label>
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Please enter your name "
                            />
                            <span
                              style={{
                                color: "red",
                                fontSize: "small",
                                textAlign: "start",
                                display: "flex",
                                padding: 4,
                                paddingLeft: 10,
                                justifyContent: "flex-end",
                              }}
                            >
                              {error.name}
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6 p-2 px-3">
                          <div className="form-group">
                            <label htmlFor="form_lastname">Register no.</label>
                            <input
                              type="text"
                              name="rollno"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Please enter your register no."
                            />
                            <span
                              style={{
                                color: "red",
                                fontSize: "small",
                                textAlign: "start",
                                display: "flex",
                                padding: 4,
                                paddingLeft: 10,
                                justifyContent: "flex-end",
                              }}
                            >
                              {error.rollno}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 p-2 px-3">
                          <div className="form-group">
                            <label htmlFor="form_need">Block</label>
                            <select
                              name="block"
                              className="form-control"
                              onChange={handleChange}
                              // value={outpass.block}
                              defaultValue="--Select Your Block--"
                            >
                              <option value="--Select Your Block--" disabled>
                                --Select Your Block--
                              </option>
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6 p-2 px-3">
                          <div className="form-group">
                            <label htmlFor="form_email">Room no.</label>
                            <input
                              type="text"
                              name="room"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Please enter your room no."
                            />
                            <span
                              style={{
                                color: "red",
                                fontSize: "small",
                                textAlign: "start",
                                display: "flex",
                                padding: 4,
                                paddingLeft: 10,
                                justifyContent: "flex-end",
                              }}
                            >
                              {error.room}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 p-2 px-3">
                          <div className="form-group">
                            <label htmlFor="form_email">Out Date & Time</label>
                            <input
                              type="datetime-local"
                              name="dateout"
                              className="form-control"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 p-2 px-3">
                          <div className="form-group">
                            <label htmlFor="form_email">In Date & Time</label>
                            <input
                              type="datetime-local"
                              name="datein"
                              className="form-control"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Reason</label>
                            <textarea
                              onChange={handleChange}
                              name="reason"
                              className="form-control"
                              placeholder="Write your message here."
                              rows="4"
                            ></textarea>
                            <span
                              style={{
                                color: "red",
                                fontSize: "small",
                                textAlign: "start",
                                display: "flex",
                                padding: 4,
                                paddingLeft: 10,
                                justifyContent: "flex-end",
                              }}
                            >
                              {error.reason}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn btn-success btn-send  pt-2 btn-block mt-3"
                          >
                            Send request
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
