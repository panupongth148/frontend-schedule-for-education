import { Button, InputGroup, FormControl, Placeholder } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import axios from "../plugins/axios";

const CreateSchedule = () =>{
  const [schedule, setSchedule] = useState(null)
  const navigate = useNavigate();
  const [scheduleId, setScheduleId] = useState(null)
  function handleChange(event) {
    console.log("test has changed")
    setSchedule(event.target.value)
    // console.log(event.target.value);
  }
  const createSchedule = async () =>{
    await axios.post('/addschedule', {
      s_name: schedule, 
      account_id: 1
    }).then((res)=>{
      console.log(res.data)
      setScheduleId(res.data.sehedule_id)
      console.log(scheduleId)
    }).catch((err)=>{
      console.log(err)
    })

    // navigate('/sample', {replace: true});
  }
    return(
        <div className="App">
          <div className='container mt-5' style={{backgroundColor: "#AB46D2"}}>
            <h1 style={{fontSize: "80px"}}>Create Schedule</h1>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C"}}>Schedule Name</InputGroup.Text>
              <FormControl type="text" style={{height: "60px", fontSize: "40px"}} aria-label="ScheduleCode" placeholder="Please enter schedule name." value={ schedule } onChange={handleChange}/>
            </InputGroup>

            <div className="row">
            <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "120px", fontSize: "70px"}} onClick={createSchedule}>
              <Link style={{  textDecorationLine: "none", color: "white"}} to={{pathname:`/Createsc2`}} state={{ scheduleName: schedule, scheduleId: scheduleId }}>Add</Link>
            </Button>
            </div>
          </div>
          <Footer/>
      </div>
    )
}

export default CreateSchedule