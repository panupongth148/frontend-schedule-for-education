import React from "react";
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomepageSchedule = (props) => {
    return (
        <ListGroup.Item style={{height: "100px", fontSize: "40px", backgroundColor: "#FCF69C"}} action href="#link1">
            <Link style={{ textDecorationLine: "none", color: "black" }} to={`/Schedule`} params={{ subjects: props.schedule.subjects }} >{props.schedule.title}</Link>
        </ListGroup.Item>
    )
}

export default HomepageSchedule;