import { Button, InputGroup, FormControl, Placeholder } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CreateSchedule = () =>{
    return(
        <div className="App">
          <div className='container' style={{backgroundColor: "#AB46D2"}}>
            <h1 style={{fontSize: "80px"}}>Create Schedule</h1>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C"}}>Schedule Name</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} aria-label="ScheduleCode" placeholder="Please enter schedule name." />
            </InputGroup>

            <div className="row">
            <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "120px", fontSize: "70px"}}>
              <Link style={{  textDecorationLine: "none", color: "white"}} to={`/Createsc2`} >Add</Link>
            </Button>
            </div>
          </div>
      </div>
    )
}

export default CreateSchedule