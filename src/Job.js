import parse from "html-react-parser";

function formatDateRange(time) {
    const start = `${time.start_month} ${time.start_year}`;
    const end = time.end_month && time.end_year
        ? `${time.end_month} ${time.end_year}`
        : "Present";
    return `${start} - ${end}`;
}

export function Job({ job }) {
    const dateRange = job.employment_times
        .map(formatDateRange)
        .join(", ");

    return (
        <div className="job">
            <h3>{job.titles.join(", ")} | {job.company} | {job.years}</h3>
            {dateRange}<br />
            <ul>
                {job.points.map((point, i) => (
                    <li key={i}>{parse(point)}</li>
                ))}
            </ul>
        </div>
    );
}
