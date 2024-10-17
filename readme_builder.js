import {Resume} from "./src/Resume.js";

// Hi Recruiter and Hiring Managers! Please ignore this code. It was
// a 15 minute hack to get my Github README together from the paper resume.

// Actually, please don't judge this whole repo. I thought it would be fun
// to try and build a resume using React instead of Word, and it turned
// out to be way more fun than the alternative. I'm not going to put
// the same amount of effort in one-off resume tooling than enterprise-grade
// software :)

function formatEmploymentDates(employment_times) {
    return employment_times.map(time => {
        let start = `${time.start_month} ${time.start_year}`;
        let end = time.end_month && time.end_year ? `${time.end_month} ${time.end_year}` : "Present";
        return `${start} - ${end}`;
    }).join(", ");
}

function formatJobSection(jobs) {
    let output = "## Job Experience\n";
    jobs.forEach(job => {
        output += `### ${job.company} | ${job.titles.join(", ")}\n`;
        output += `${formatEmploymentDates(job.employment_times)}\n`;
        job.points.forEach(point => {
            output += `* ${point}\n`;
        });
        output += "\n";
    });
    return output;
}

function formatEducation(education) {
    let output = "## Education\n";
    output += `### ${education.degree}\n`;
    output += `${education.school}<br />\n`;
    output += `*${education.start_month} ${education.start_year} - ${education.end_month} ${education.end_year}*\n`;
    return output;
}

function formatSkills(skills, title) {
    let output = `### ${title}\n`;
    skills.forEach(skill => {
        output += `* **${skill.language || skill.skill}** | ${skill.years_experience} years\n`;
    });
    return output;
}

let resumeOutput = "";

resumeOutput += "# Hi, My Name is Mike.\n";
resumeOutput += `${Resume.summary}\n\n`;
resumeOutput += formatJobSection(Resume.jobs);
resumeOutput += formatEducation(Resume.education);
resumeOutput += "## Skillset\n";
resumeOutput += formatSkills(Resume.language_skills, "Programming Languages");
resumeOutput += formatSkills(Resume.hard_skills, "Tech Skills");

console.log(resumeOutput);
