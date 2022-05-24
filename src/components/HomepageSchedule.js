import React, {useState, useEffect} from "react";
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const HomepageSchedule = (props) => {
    return (
        <>
            <Link
                style={{
                    textDecorationLine: "none",
                    fontSize: "20px",
                }}
                to={`/Schedule`}
                state={{ schedule: props.schedule }}
                className="has-text-grey-darker"
            >
                <li>
                    <a>{props.schedule.s_name}</a>
                </li>
            </Link>
        </>
    )
}

export default HomepageSchedule;