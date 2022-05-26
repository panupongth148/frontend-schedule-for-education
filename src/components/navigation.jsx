import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../plugins/axios";

import HomePage from "../page/Homepage";
import AddSchedule from "../page/AddSchedule";
import CreateSchedule from "../page/CreateSchedule";
import CreateScheduleNext from "../page/CreateScheduleNext";
import AddSubject from "../page/AddSubject";
import Login from "../page/Login";
import Register from "../page/Register";
import Schedule from "../page/Schedule";

const Navigation = (props) => {
  const [user, setUser] = useState(null);

  async function getUserByToken() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      console.log(token);
      let response = await axios.get(`getuserbytoken`, {
        params: {
          token: token,
        },
      });
      setUser(response.data);
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    getUserByToken();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };
  console.log(user);

  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand style={{ color: "#FCF69C" }} as={Link} to="/">
              <span>
                <img
                  className="mr-2"
                  src="https://cdn-icons-png.flaticon.com/512/470/470326.png"
                  width="40px"
                  height="100%"
                  alt="Shedule"
                />
                Schedule Expert
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              {!user && (
                <Nav>
                  <Nav.Link
                    style={{ color: "#FCF69C" }}
                    as={Link}
                    to="/Register"
                  >
                    Register
                  </Nav.Link>
                  <Nav.Link style={{ color: "#FCF69C" }} as={Link} to="/Login">
                    Login
                  </Nav.Link>
                </Nav>
              )}
              {user && (
                <Nav>
                  <Nav.Link style={{ color: "#FCF69C" }}>
                    {user[0].name}
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "#FCF69C" }}
                    onClick={logout}
                    to="/"
                  >
                    Logout
                  </Nav.Link>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route exact name="home" path="/" element={<HomePage />}></Route>
          <Route
            name="AddSchedule"
            path="/AddSc"
            element={<AddSchedule />}
          ></Route>
          <Route
            name="CreateSchedule"
            path="/CreateSc"
            element={<CreateSchedule />}
          ></Route>
          <Route
            name="CreateScheduleNext"
            path="/CreateSc2"
            element={<CreateScheduleNext />}
          ></Route>
          <Route
            name="AddSubject"
            path="/AddSj"
            element={<AddSubject />}
          ></Route>
          <Route name="Login" path="/Login" element={<Login />}></Route>
          <Route
            name="Register"
            path="/Register"
            element={<Register />}
          ></Route>
          <Route
            name="Schedule"
            path="/Schedule"
            element={<Schedule />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
