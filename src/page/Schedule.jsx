import { Button, InputGroup, FormControl, Placeholder, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Subject from './../components/Subject';

const Schedule = () =>{
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
          <div className="container">
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
          </div>
      </div>
    )
}

export default Schedule