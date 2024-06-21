import {Resume} from "./src/Resume.js";

// Hi Recruiter and Hiring Managers! Please ignore this code. It was
// a 15 minute hack to get my Github README together from the paper resume.

// Actually, please don't judge this whole repo. I thought it would be fun
// to try and build a resume using React instead of Word, and it turned
// out to be way more fun than the alternative. I'm not going to put
// the same amount of effort in one-off resume tooling than enterprise-grade
// software :)

console.log("# Hi, My Name is Mike.");
console.log(Resume.summary);

console.log('');
console.log("## Job Experience")
for (let job of Resume.jobs) {
    // console.log(job);
    console.log("###", job.company, " | ", job.titles.join(", "));

    let employment_dates = [];
    for (let employment_time of job.employment_times) {
        let start = employment_time.start_month + " " + employment_time.start_year;
        let end = "Present";

        if (employment_time.end_month && employment_time.end_year) {
            end = employment_time.end_month + " " + employment_time.end_year;
        }

        employment_dates.push(start + " - " + end);

    }

    console.log(employment_dates.join(", "));

    for (let point of job.points) {
        console.log("* " + point)
    }

    console.log("");
    console.log("");
}

console.log("## Education")
console.log("### " + Resume.education.degree + "")
console.log(Resume.education.school + "<br />")
console.log("*" + Resume.education.start_month + " " + Resume.education.start_year + " - " + Resume.education.end_month + " " + Resume.education.end_year + "*");

console.log("## Skillset")
console.log("### Programming Languages")
for (let skill of Resume.language_skills) {
    console.log("* **" + skill.language + "** | " + skill.years_experience + " years")
}

console.log("### Tech Skills")
for (let skill of Resume.hard_skills) {
    console.log("* **" + skill.skill + "** | " + skill.years_experience + " years")
}
// console.log(Resume);
