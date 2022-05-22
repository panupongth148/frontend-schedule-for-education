import React, {useState, useEffect} from "react";
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const HomepageSchedule = (props) => {
    

    console.log(props.schedule)
    return (
        <ListGroup.Item style={{height: "100px", fontSize: "40px", backgroundColor: "#FCF69C"}} action href="#link1">
            <Link style={{ textDecorationLine: "none", color: "black" }} to={`/Schedule`} state={{ subjects: props.schedule.schedule_id }}  >{props.schedule.s_name}</Link>
        </ListGroup.Item>
    )
}

export default HomepageSchedule;