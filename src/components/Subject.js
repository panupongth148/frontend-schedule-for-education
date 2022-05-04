import React from "react";

const Subject = (props) => {
    return (
        <tr>
            <td>{ props.subject.day }</td>
            <td>{ props.subject.name }</td>
            <td>{ props.subject.time }</td>
            <td><a href="www.google.com">{ props.subject.link }</a></td>
        </tr>
    )
}

export default Subject;