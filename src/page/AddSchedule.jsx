import { Button, InputGroup, FormControl, Placeholder } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddSchedule = () =>{
    return(
        <div className="App">
          <div className='container mt-5' style={{backgroundColor: "#AB46D2"}}>
            <h1 style={{fontSize: "80px"}}>Add Schedule</h1>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C"}}>Schedule Code</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Please enter schedule code like SABA001. " aria-label="ScheduleCode" />
            </InputGroup>

            <div className="row">
              <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "120px", fontSize: "70px"}}>Add</Button>
            </div>
          </div>
      </div>
    )
}

export default AddSchedule