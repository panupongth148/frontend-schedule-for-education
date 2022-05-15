import { Button, ModalHeader, ModalBody, ModalDialog, ModalFooter, Table, ModalTitle } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Subject from './../components/Subject';
import { useParams } from "react-router-dom"
import Footer from '../components/Footer';

const Schedule = () => {
  const subjectss = useParams();

  console.log(subjectss);
  const [subjects, setSubjects] = useState([
    {
      id: "1",
      name: "Math",
      day: "Monday",
      time: "13.00-16.00",
      link: "www.math.com"
    },
    {
      id: "2",
      name: "Human interface developer",
      day: "Wednesday",
      time: "9.00-12.00",
      link: "www.Humaninterfacedeveloper.com"
    },
    {
      id: "3",
      name: "Software development tools",
      day: "Friday",
      time: "13.00-16.00",
      link: "www.Softwaredevelopmenttools.com"
    },
  ]);

  // axios

    return(
        <div className="App">
          <div className="container mt-5">
            <Table striped bordered hover className='mt-5'>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Subject</th>
                    <th>Time</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  { subjects.map((subject) => {
                    return (
                      <Subject key={subject.id} subject={subject} />
                    )
                  }) }
                </tbody>
              </Table>
              <Button variant="danger" style={{width: "100%"}} onclick="">Delete this schedule</Button>
              <ModalDialog style={{visibility: "show"}}>
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
          <Footer/>
      </div>

    )
}

export default Schedule