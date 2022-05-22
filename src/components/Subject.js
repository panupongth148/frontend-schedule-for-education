import React from "react";

const Subject = (props) => {
    return (
        <tr>
            <td>{ props.subject.date }</td>
            <td>{ props.subject.subject_name }</td>
            <td>{ props.subject.period }</td>
            <td><a href={props.subject.link} target="_blank" >{ props.subject.link }</a></td>
        </tr>
    )
}

export default Subject;