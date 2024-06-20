function Education(props) {
    return <div>
        <h2>Education</h2>
        <b>{props.education.school}</b><br />
        <i>{props.education.degree}</i><br />
        {props.education.start_month} {props.education.start_year} - {props.education.end_month} {props.education.end_year}  <br />
    </div>

}

export default Education;