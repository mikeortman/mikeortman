export function Education({ education }) {
    return (
        <div>
            <h2>Education</h2>
            <b>{education.school}</b><br />
            <i>{education.degree}</i><br />
            {education.start_month} {education.start_year} - {education.end_month} {education.end_year}
        </div>
    );
}
