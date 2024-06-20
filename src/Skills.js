import {Resume} from "./Resume";

function getSkillText(years) {
    return years + (years >= 10 ? '+' : '') + " year" + (years !== 1 ? 's' : '')
}

function Skills(props) {
    let language_skills = [];
    for (let skill of Resume.language_skills) {
        language_skills.push(<li>
            <b>{skill.language}</b> | {getSkillText(skill.years_experience)}
            <div className={"skill_bar skill_bar_" + skill.years_experience}></div>
        </li>)
    }

    let skills = [];
    for (let skill of Resume.hard_skills) {
        skills.push(<li>
            <b>{skill.skill}</b> | {getSkillText(skill.years_experience)}
            <div className={"skill_bar skill_bar_" + skill.years_experience}></div>
        </li>)
    }


    return <>
        <div>
            <h2>Languages</h2>
            <ul className={"skills_list"}>
                {language_skills}
            </ul>
        </div>
        <div>
            <h2>Technical Skills</h2>
            <ul className={"skills_list"}>
                {skills}
            </ul>
        </div>
    </>

}

export default Skills;