import { Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomepageSchedule from './../components/HomepageSchedule';
import Footer from '../components/Footer';
import axios from "../plugins/axios";

const Homepage = (props) =>{
  const [schedule_list, set_schedule_list] = useState(null)
  const [user, setUser] = useState(null)
  async function getScheduleList(){
    let response = await axios.get(`/getallsbyid/${props.user.account_id}`)
    // console.log(response.data)
    let scheduleList = response.data
    set_schedule_list(scheduleList)
    // console.log(schedule_list)
  }
  useEffect(() => {    // Update the document title using the browser API
    getScheduleList();
  }, []);
  // axios
  // setSchedule()

    return(
        <div className="App">
          <div className='container mt-5' style={{backgroundColor: "#AB46D2"}}>
            <h1 style={{fontSize: "80px"}}>Schedule List</h1>
              <ListGroup >
                { schedule_list && schedule_list.map((schedule) => {
                  return (
                    <HomepageSchedule key={schedule.id} schedule={schedule} />
                  )
                }) }
              </ListGroup>
          <div className="row">
            <Button className="mt-1" style={{backgroundColor: "#55D8C1",height: "60px", fontSize: "30px"}}>
            <Link style={{  textDecorationLine: "none", color: "black"}} to={`/Createsc`} >Create Schedule</Link>
            </Button>
          </div>
          <div className="row">
          <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "60px", fontSize: "30px"}}>
            <Link style={{  textDecorationLine: "none", color: "black"}} to={`/Addsc`} >Add Schedule</Link>
          </Button>
          </div>
          </div>
          
      </div>
    )
}

export default Homepage