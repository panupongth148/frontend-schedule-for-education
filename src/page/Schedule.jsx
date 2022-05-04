import logo from '../logo.svg';
import { Button, InputGroup, FormControl, Placeholder, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const homePage = () =>{
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
                  <tr>
                    <td>Monday</td>
                    <td>Human interface developer</td>
                    <td>14.00</td>
                    <td><a href="www.google.com">www.Humaninterfacedeveloper.com</a></td>
                  </tr>
                  <tr>
                  <td>Tuesday</td>
                    <td>Software development tools</td>
                    <td>12.00</td>
                    <td><a href="www.google.com">www.Softwaredevelopmenttools.com</a></td>
                  </tr>
                  <tr>
                  <td>Saturday</td>
                    <td>Information Technology Project Management</td>
                    <td>18.00</td>
                    <td><a href="www.google.com">www.InformationTechnologyProjectManagement.com</a></td>
                  </tr>
                </tbody>
              </Table>
          </div>
            
      </div>
    )
}

export default homePage