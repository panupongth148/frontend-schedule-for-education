import { Button, Badge  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HomepageSchedule from './../components/HomepageSchedule';
import Footer from '../components/Footer';
import axios from "../plugins/axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

const ButtonGroup = styled.div`
  .bn1, .bn2{
    background-color: #7DF9FF;
    color: #000;
    margin: 5px;
  },
`;

const FlexContainer = styled.div`
  @media only screen and (min-width: 768px){
    display: flex;
    justify-content: space-between;
  }
`;

const Homepage = () =>{
  const [schedule_list, set_schedule_list] = useState(null)
  const [user, setUser] = useState({account_id: 0})
  const navigate = useNavigate();

  async function getScheduleList(){
    let response = await axios.get(`/getallsbyid/${user.account_id}`)
    // console.log(response.data)
    let scheduleList = response.data
    set_schedule_list(scheduleList)
    console.log(schedule_list);
  }

  async function getUserByToken(){
    const token = localStorage.getItem('token');
    console.log(token)
    if(token){
      console.log(token)
      let response = await axios.get(`getuserbytoken`, {
        params: {
          token: token
        }
      })
      const us = response.data[0]
      console.log(us)
      setUser(us)
    }
  }

  useEffect(() => {    // Update the document title using the browser API
    getScheduleList();
  }, [user]);

  useEffect(() => {
    getUserByToken();
    console.log(user)
  }, [])

  return(
    <div>
      <div className="container mt-5">
        {/* <div className="box"> */}
        {/* <h1 className="title is-1">Schedule List</h1> */}
        <div className="container">
          <aside class="menu">
            <ul class="menu-list">
              <li>
                <a
                  class="is-active"
                  style={{
                    fontSize: "30px",
                    textDecoration: "none",
                    cursor: "default",
                  }}
                >
                  <FlexContainer>
                    <h1 class="menu-label has-text-info-light">
                      Schedule List {" "}
                      <span>
                        <Badge bg="warning">
                          <FontAwesomeIcon icon={faCalendarPlus} />{" "}
                          {!schedule_list && <>loading...</>}
                          {schedule_list && <>{schedule_list.length}</>}
                        </Badge>
                      </span>
                    </h1>
                    <ButtonGroup>
                      <Button
                        className="bn1"
                        onClick={() => {
                          navigate("/Createsc", { state: { id: user.account_id } });
                        }}
                      >
                        Create Schedule
                      </Button>
                      <Button
                        className="bn2"
                        onClick={() => {
                          navigate("/Addsc");
                        }}
                      >
                        Add Schedule
                      </Button>
                    </ButtonGroup>
                  </FlexContainer>
                </a>
                <ul>
                  {schedule_list &&
                    schedule_list.map((schedule) => {
                      return (
                        <HomepageSchedule
                          key={schedule.schedule_id}
                          schedule={schedule}
                        />
                      );
                    })}
                </ul>
              </li>
            </ul>
          </aside>
        </div>
        {/* <div className="row">
          <Button
            className="mt-1"
            style={{
              backgroundColor: "#55D8C1",
              height: "60px",
              fontSize: "30px",
            }}
          >
            <Link
              style={{ textDecorationLine: "none", color: "black" }}
              to={`/Createsc`}
            >
              Create Schedule
            </Link>
          </Button>
        </div>
        <div className="row">
          <Button
            className="mt-1 "
            style={{
              backgroundColor: "#55D8C1",
              height: "60px",
              fontSize: "30px",
            }}
          >
            <Link
              style={{ textDecorationLine: "none", color: "black" }}
              to={`/Addsc`}
            >
              Add Schedule
            </Link>
          </Button>
        </div>
      </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default Homepage