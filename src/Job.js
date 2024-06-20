import Parser from 'html-react-parser';

function Job(props) {
    console.log(props);
    let points = [];
    for (let point of props.job.points) {
        points.push(<li>{Parser(point)}</li>)
    }

    let employment_ranges = [];
    for (let employment_range of props.job.employment_times) {
        let start_date = employment_range.start_month + " " +  employment_range.start_year;

        let end_date = "Present";
        if (employment_range.end_month && employment_range.end_year) {
            end_date = employment_range.end_month + " " + employment_range.end_year;
        }

        employment_ranges.push(start_date + " - " + end_date);
    }



    return <div className={"job"}>
        <h3>{props.job.titles.join(", ")} | {props.job.company} | {props.job.years}</h3>
        {employment_ranges.join(", ")} <br />
        <ul>{points}</ul>
    </div>

}

export default Job;