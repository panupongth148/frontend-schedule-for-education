import React from "react";
import { Button, InputGroup, FormControl, Placeholder } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";

const AddSchedule = () => {
  const location = useLocation();
  const { scheduleName } = location.state;
  return (
    <div className="App">
      <div className="container mt-5" style={{ backgroundColor: "#AB46D2" }}>
        <h1 style={{ fontSize: "80px" }}>Add Schedule</h1>
        <InputGroup className="mb-3">
          <InputGroup.Text style={{ backgroundColor: "#FCF69C" }}>
            Schedule Code
          </InputGroup.Text>
          <FormControl
            style={{ height: "60px", fontSize: "40px" }}
            placeholder="Please enter schedule code like SABA001. "
            aria-label="ScheduleCode"
          />
        </InputGroup>

        <div className="row">
          <Button
            className="mt-1 "
            style={{
              backgroundColor: "#55D8C1",
              height: "120px",
              fontSize: "70px",
            }}
          >
            Add
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddSchedule;
