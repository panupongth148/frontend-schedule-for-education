import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLogin = () => {
    console.log("Login user : " + username);

    // axios


    setUsername('');
    setPassword('');
    console.log("Login success");

    window.location.href('/');
  }

    return(
        <div className="App">
          <div className='container' style={{backgroundColor: "#AB46D2"}}>
            <h1 style={{fontSize: "80px"}}>Login to my schedule</h1>
            <InputGroup className="mb-3 mt-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "150px", fontSize: "30px"}}>Username</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Enter your username." aria-label="ScheduleCode" value={ username } onChange={ (e) => setUsername(e.target.value) } />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "150px", fontSize: "30px"}}>Password</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Enter your password." aria-label="ScheduleCode" value={ password } onChange={ (e) => setPassword(e.target.value) } />
            </InputGroup>
            <div className="row">
            <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "90px", fontSize: "50px"}} onClick={ () => onSubmitLogin() } >
              {/* <Link style={{  textDecorationLine: "none", color: "white"}} to={`/`} >Login</Link> */}
              Login
            </Button>
            <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "90px", fontSize: "50px"}}>
              <Link style={{  textDecorationLine: "none", color: "white"}} to={`/Register`} >Register</Link>
            </Button>
            </div>
          </div>
      </div>
    )
}

export default Login