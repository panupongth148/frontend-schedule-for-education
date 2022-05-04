import { Button, InputGroup, FormControl, Placeholder, Dropdown, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddSubject = () =>{
    return(
        <div className="App">
          <div className='container mt-5' style={{backgroundColor: "#AB46D2"}}>
            <h1 style={{fontSize: "80px"}}>Create Test Schecule</h1>
            <Dropdown>
              <Dropdown.Toggle style={{width: "100%", height: "60px"}} variant="success" id="dropdown-basic">
                Select Day
              </Dropdown.Toggle>
              <Dropdown.Menu style={{width: "100%"}}>
                <Dropdown.Item eventKey="1">Sunday</Dropdown.Item>
                <Dropdown.Item eventKey="2">Monday</Dropdown.Item>
                <Dropdown.Item eventKey="3">Tuesday</Dropdown.Item>
                <Dropdown.Item eventKey="4">Wednesday</Dropdown.Item>
                <Dropdown.Item eventKey="5">Thursday</Dropdown.Item>
                <Dropdown.Item eventKey="6">Friday</Dropdown.Item>
                <Dropdown.Item eventKey="7">Saturday</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <InputGroup className="mb-3 mt-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "150px"}}>Subject Name</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Please enter your subject name." aria-label="ScheduleCode" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "150px"}}>Subject Time</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Please enter your subject name." aria-label="ScheduleCode" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "150px"}}>Subject Link</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Please enter your subject link." aria-label="ScheduleCode" />
            </InputGroup>
            <div className="row">
            <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "120px", fontSize: "70px"}}>Add</Button>
            </div>
          </div>
      </div>
    )
}

export default AddSubject