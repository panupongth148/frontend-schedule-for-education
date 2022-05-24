import { Button, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "../plugins/axios";
import Footer from "../components/Footer";
import "../assets/Styles.css";
import { FlexContainer, Box } from "../components/Components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLogin = () => {
    console.log("Login user : " + username);

    // axios
    axios
      .post("/user/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setUsername("");
    setPassword("");

    console.log("Login success");
    window.location.href("/");
  };

  return (
    <>
      <FlexContainer>
        <Box>
          <img
            id="logo"
            src="https://www.it.kmitl.ac.th/wp-content/uploads/2017/12/it-logo.png"
            alt="it-logo"
          />
          <form id="form" class="box">
            <h1 class="title has-text-centered">Login</h1>
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="e.g. Owensudhod"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" placeholder="********" />
              </div>
            </div>

            <button class="button is-primary is-fullwidth">Sign in</button>
          </form>
        </Box>
      </FlexContainer>
      <Footer />
    </>
    // <div className="container">
    //   <div className="row">
    //     <div className="col-4">
    //       <h1 className="text-bg-primary">Login</h1>
    //     </div>
    //     <div className="col-8">
    //       <form className="box is-4">
    //         <div className="field">
    //           <label className="label">Username</label>
    //           <div className="control">
    //             <input
    //               className="input"
    //               type="email"
    //               placeholder="e.g. xxxxxxx"
    //             />
    //           </div>
    //         </div>

    //         <div className="field">
    //           <label className="label">Password</label>
    //           <div className="control">
    //             <input
    //               className="input"
    //               type="password"
    //               placeholder="********"
    //             />
    //           </div>
    //         </div>

    //         <button className="button is-primary">Sign in</button>
    //       </form>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
    // <div className="App">
    //   <div className="container mt-5" style={{ backgroundColor: "#AB46D2" }}>
    //     <h1 style={{ fontSize: "80px" }}>Login to my schedule</h1>
    //     <InputGroup className="mb-3 mt-3">
    //       <InputGroup.Text
    //         style={{
    //           backgroundColor: "#FCF69C",
    //           width: "150px",
    //           fontSize: "30px",
    //         }}
    //       >
    //         Username
    //       </InputGroup.Text>
    //       <FormControl
    //         style={{ height: "60px", fontSize: "40px" }}
    //         placeholder="Enter your username."
    //         aria-label="ScheduleCode"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </InputGroup>
    //     <InputGroup className="mb-3">
    //       <InputGroup.Text
    //         style={{
    //           backgroundColor: "#FCF69C",
    //           width: "150px",
    //           fontSize: "30px",
    //         }}
    //       >
    //         Password
    //       </InputGroup.Text>
    //       <FormControl
    //         style={{ height: "60px", fontSize: "40px" }}
    //         placeholder="Enter your password."
    //         aria-label="ScheduleCode"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </InputGroup>
    //     <div className="row">
    //       <Button
    //         className="mt-1 "
    //         style={{
    //           backgroundColor: "#55D8C1",
    //           height: "90px",
    //           fontSize: "50px",
    //         }}
    //         onClick={() => onSubmitLogin()}
    //       >
    //         {/* <Link style={{  textDecorationLine: "none", color: "white"}} to={`/`} >Login</Link> */}
    //         Login
    //       </Button>
    //       <Button
    //         className="mt-1 "
    //         style={{
    //           backgroundColor: "#55D8C1",
    //           height: "90px",
    //           fontSize: "50px",
    //         }}
    //       >
    //         <Link
    //           style={{ textDecorationLine: "none", color: "white" }}
    //           to={`/Register`}
    //         >
    //           Register
    //         </Link>
    //       </Button>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
  );
};

export default Login;
