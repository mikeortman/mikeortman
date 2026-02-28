function formatYears(years) {
    return `${years}${years >= 10 ? "+" : ""} year${years !== 1 ? "s" : ""}`;
}

function SkillList({ title, items, labelKey }) {
    return (
        <div>
            <h2>{title}</h2>
            <ul className="skills_list">
                {items.map((item, i) => (
                    <li key={i}>
                        <b>{item[labelKey]}</b> | {formatYears(item.years_experience)}
                        <div className={`skill_bar skill_bar_${item.years_experience}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function Skills({ languageSkills, hardSkills }) {
    return (
        <>
            <SkillList title="Languages" items={languageSkills} labelKey="language" />
            <SkillList title="Technical Skills" items={hardSkills} labelKey="skill" />
        </>
    );
}
