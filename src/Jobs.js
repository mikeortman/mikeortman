import { Job } from "./Job.js";

export function Jobs({ jobs }) {
    return (
        <div className="main_content_block">
            <h2>Experience</h2>
            <div className="jobs">
                {jobs.map((job, i) => (
                    <Job key={i} job={job} />
                ))}
            </div>
        </div>
    );
}
