import logo from '../logo.svg';
import { Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const homePage = () =>{
    return(
        <div className="App">
          <div className='container' style={{backgroundColor: "#AB46D2"}}>
            <h1 style={{fontSize: "80px"}}>Schedule List</h1>
              <ListGroup >
                <ListGroup.Item style={{height: "100px", fontSize: "40px", backgroundColor: "#FCF69C"}} action href="#link1">
                <Link style={{  textDecorationLine: "none", color: "white"}} to={`/Schedule`} >Schedule_1</Link>
                </ListGroup.Item>
                <ListGroup.Item style={{height: "100px", fontSize: "40px", backgroundColor: "#FCF69C"}}>
                  Schedule_2
                </ListGroup.Item>
              </ListGroup>

          <div className="row">
            <Button className="mt-1" style={{backgroundColor: "#55D8C1",height: "60px", fontSize: "30px"}}>
            <Link style={{  textDecorationLine: "none", color: "white"}} to={`/Createsc`} >Create Schedule</Link>
            </Button>
          </div>
          <div className="row">
          <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "60px", fontSize: "30px"}}>
            <Link style={{  textDecorationLine: "none", color: "white"}} to={`/Addsc`} >Add Schedule</Link>
          </Button>
          </div>
          </div>

      </div>
    )
}

export default homePage