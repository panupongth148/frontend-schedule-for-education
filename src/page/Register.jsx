import logo from '../logo.svg';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const homePage = () =>{
    return(
        <div className="App">
          <div className='container' style={{backgroundColor: "#AB46D2"}}>
            <h1 style={{fontSize: "80px"}}>Register page</h1>
            <InputGroup className="mb-3 mt-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "260px", fontSize: "30px"}}>Username</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Enter your username." aria-label="ScheduleCode" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "260px", fontSize: "30px"}}>Password</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Enter your password." aria-label="ScheduleCode" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "260px", fontSize: "30px"}}>Confirm password</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Confirm your password." aria-label="ScheduleCode" />
            </InputGroup>
            <div className="row">
            <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "120px", fontSize: "70px"}}>
              <Link style={{  textDecorationLine: "none", color: "white"}} to={`/`} >Register</Link>
            </Button>
            </div>
          </div>
      </div>
    )
}

export default homePage