import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomepageSchedule = (props) => {
  console.log(props.schedule.schedule_id);
  return (
    <>
      <Link
        style={{
          textDecorationLine: "none",
          fontSize: "20px",
        }}
        to={`/Schedule`}
        state={{ subjects: props.schedule.schedule_id }}
        className="has-text-grey-darker"
      >
        <li>
          <a>{props.schedule.s_name}</a>
        </li>
      </Link>
      {/* <ListGroup.Item
        style={{
          height: "100px",
          fontSize: "40px",
          backgroundColor: "#FCF69C",
        }}
        action
        href="#link1"
      >
        <Link
          style={{ textDecorationLine: "none", color: "black" }}
          to={`/Schedule`}
          state={{ subjects: props.schedule.schedule_id }}
        >
          {props.schedule.s_name}
        </Link>
      </ListGroup.Item> */}
    </>
  );
};

export default HomepageSchedule;
