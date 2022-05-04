import { Button, InputGroup, FormControl, Placeholder, Dropdown, Form, Control } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
  { value: 'Sundayy', label: 'Sundayy' },
]
const AddSubject = () =>{
    return(
        <div className="App">
          <div className='container mt-5' style={{backgroundColor: "#AB46D2"}}>
            <h1 style={{fontSize: "80px"}}>Create Test Schecule</h1>
            <Select options={options}/>
            <InputGroup className="mb-3 mt-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "150px"}}>Subject Name</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Please enter your subject name." aria-label="ScheduleCode" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "150px"}}>Subject Time</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Please enter your subject name." aria-label="ScheduleCode" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text style={{backgroundColor: "#FCF69C", width: "150px"}}>Subject Link</InputGroup.Text>
              <FormControl style={{height: "60px", fontSize: "40px"}} placeholder="Please enter your subject link." aria-label="ScheduleCode" />
            </InputGroup>
            <div className="row">
            <Button className="mt-1 " style={{backgroundColor: "#55D8C1",height: "120px", fontSize: "70px"}}>Add</Button>
            </div>
          </div>
          <Footer/>
      </div>
    )
}

export default AddSubject