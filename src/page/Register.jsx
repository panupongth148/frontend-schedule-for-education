import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "../plugins/axios";
import Footer from '../components/Footer';

const Register = () =>{
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('test1@gmail.com');

  const onSubmitRegister = () => {
    console.log("register : k." + name);

    // axios
    axios.post('/register', {
      username : username,
      name: name,
      password: password,
      email: email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    


    setName('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    console.log("register success");

    window.location.href('/');
  }

  return(
    <div className="App">
      <div className='container mt-5' style={{backgroundColor: "#AB46D2"}}>
        <h1 style={{fontSize: "80px"}}>Register page</h1>
        <InputGroup className="mb-3 mt-3">
          <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "260px", fontSize: "30px"}}>Username</InputGroup.Text>
          <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Enter your username." aria-label="ScheduleCode" value={ username } onChange={ (e) => setUsername(e.target.value) } />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "260px", fontSize: "30px"}}>Password</InputGroup.Text>
          <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Enter your password." aria-label="ScheduleCode" value={ password } onChange={ (e) => setPassword(e.target.value) } />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "260px", fontSize: "30px"}}>Confirm password</InputGroup.Text>
          <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Confirm your password." aria-label="ScheduleCode" value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value) } />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "260px", fontSize: "30px"}}>Name</InputGroup.Text>
          <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Enter your name." aria-label="ScheduleCode" value={ name } onChange={ (e) => setName(e.target.value) } />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "260px", fontSize: "30px"}}>Email</InputGroup.Text>
          <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Enter your Email." aria-label="ScheduleCode" value={ email } onChange={ (e) => setEmail(e.target.value) } />
        </InputGroup>
        <div className="row">
        <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "120px", fontSize: "70px"}} onClick={ () => onSubmitRegister() } >
          {/* <Link style={{  textDecorationLine: "none", color: "white"}} to={`/`} >Register</Link> */}
          Register
        </Button>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Register