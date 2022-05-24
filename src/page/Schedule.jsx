import {
  Button,
  ModalHeader,
  ModalBody,
  ModalDialog,
  ModalFooter,
  Table,
  ModalTitle,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Subject from "./../components/Subject";
import { useParams, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "../plugins/axios";

const Schedule = () => {
  const location = useLocation();
  const { subjects } = location.state;

  const [subjectData, setSubjectData] = useState(null);

  async function getScheduleList() {
    let response = await axios.get(`/getsubjectbysid/${subjects}`);
    console.log(response.data);
    let scheduleList = response.data;
    setSubjectData(scheduleList);
    console.log(subjectData);
  }
  useEffect(() => {
    // Update the document title using the browser API

    getScheduleList();
  }, []);
  // const [subjects, setSubjects] = useState([
  //   {
  //     id: "1",
  //     name: "Math",
  //     day: "Monday",
  //     time: "13.00-16.00",
  //     link: "www.math.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Human interface developer",
  //     day: "Wednesday",
  //     time: "9.00-12.00",
  //     link: "www.Humaninterfacedeveloper.com"
  //   },
  //   {
  //     id: "3",
  //     name: "Software development tools",
  //     day: "Friday",
  //     time: "13.00-16.00",
  //     link: "www.Softwaredevelopmenttools.com"
  //   },
  // ]);

  // axios

  return (
    <div className="App">
      <div className="container mt-5">
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>Day</th>
              <th>Subject</th>
              <th>Time</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {subjectData &&
              subjectData.map((subject) => {
                return <Subject key={subject.id} subject={subject} />;
              })}
          </tbody>
        </Table>
        <Button variant="danger" style={{ width: "100%" }} onclick="">
          Delete this schedule
        </Button>
        <ModalDialog style={{ visibility: "show" }}>
          <ModalHeader closeButton>
            <ModalTitle>Confirm to delete this schedule.</ModalTitle>
          </ModalHeader>

          <ModalBody>
            <p>Please choose your choice.</p>
          </ModalBody>

          <ModalFooter>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Delete</Button>
          </ModalFooter>
        </ModalDialog>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
