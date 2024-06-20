import {Resume} from "./Resume";
import Job from "./Job";
import React from "react";

export function Jobs() {

    let jobs = [];
    for (let job in Resume.jobs) {
        jobs.push(<Job job={Resume.jobs[job]} />);
    }


    return <div className={"main_content_block"}>
        <h2>Experience</h2>
        <div className={"jobs"}>
            {jobs}
        </div>
    </div>
}