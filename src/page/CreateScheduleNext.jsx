import { Button, InputGroup, FormControl, Placeholder, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CreateScheduleNext = () =>{
    return(
        <div className="App">
          <div className='container' style={{backgroundColor: "#AB46D2"}}>
            <h1 style={{fontSize: "80px"}}>Create Test Schedule</h1>
            <ListGroup >
                <ListGroup.Item style={{height: "100px", fontSize: "50px", backgroundColor: "#FCF69C"}}>
                  Subject_1
                </ListGroup.Item>
              </ListGroup>
              <div className="row">
            <Button className="mt-1" style={{backgroundColor: "#55D8C1",height: "60px", fontSize: "30px"}}>
            <Link style={{  textDecorationLine: "none", color: "white"}} to={`/Addsj`} >Add Subject</Link>
            </Button>
          </div>
          <div className="row">
          <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "60px", fontSize: "30px"}}>
            <Link style={{  textDecorationLine: "none", color: "white"}} to={`/Addsc`} >Create Schedule</Link>
          </Button>
          </div>
          </div>
      </div>
    )
}

export default CreateScheduleNext