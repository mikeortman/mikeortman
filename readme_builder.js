import { Resume } from "./src/Resume.js";

function formatEmploymentDates(employment_times) {
    return employment_times.map(time => {
        const start = `${time.start_month} ${time.start_year}`;
        const end = time.end_month && time.end_year
            ? `${time.end_month} ${time.end_year}`
            : "Present";
        return `${start} - ${end}`;
    }).join(", ");
}

function formatJobs(jobs) {
    let output = "## Experience\n";
    for (const job of jobs) {
        output += `### ${job.company} | ${job.titles.join(", ")}\n`;
        output += `${formatEmploymentDates(job.employment_times)}\n`;
        for (const point of job.points) {
            output += `* ${point}\n`;
        }
        output += "\n";
    }
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
    for (const skill of skills) {
        output += `* **${skill.language || skill.skill}** | ${skill.years_experience} years\n`;
    }
    return output;
}

let output = "";
output += `# ${Resume.name}\n`;
output += `${Resume.summary}\n\n`;
output += formatJobs(Resume.jobs);
output += formatEducation(Resume.education);
output += "## Skills\n";
output += formatSkills(Resume.language_skills, "Programming Languages");
output += formatSkills(Resume.hard_skills, "Technical Skills");

console.log(output);
