import { Button, InputGroup, FormControl, Placeholder, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const CreateScheduleNext = (props) =>{
  const location = useLocation()
  const { scheduleName, scheduleId } = location.state

  console.log(scheduleName +" : "+ scheduleId)
    return(
        <div className="App">
          <div className='container mt-5' style={{backgroundColor: "#AB46D2"}}>
            <h1 style={{fontSize: "80px"}}>Create </h1>
            <ListGroup >
                <ListGroup.Item style={{height: "100px", fontSize: "50px", backgroundColor: "#FCF69C"}}>
                  Subject_1
                </ListGroup.Item>
              </ListGroup>
              <div className="row">
            <Button className="mt-1" style={{backgroundColor: "#55D8C1",height: "60px", fontSize: "30px"}}>
            <Link style={{  textDecorationLine: "none", color: "white"}} to={`/Addsj`} state={{ scheduleName: scheduleName, scheduleId: scheduleId }} >Add Subject</Link>
            </Button>
          </div>
          <div className="row">
          <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "60px", fontSize: "30px"}}>
            <Link style={{  textDecorationLine: "none", color: "white"}} to={`/Addsc`} >Create Schedule</Link>
          </Button>
          </div>
          </div>
          <Footer/>
      </div>
    )
}

export default CreateScheduleNext