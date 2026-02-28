import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Resume } from "./Resume.js";
import { Hero } from "./Hero.js";
import { Summary } from "./Summary.js";
import { ContactInfo } from "./ContactInfo.js";
import { Jobs } from "./Jobs.js";
import { Education } from "./Education.js";
import { Skills } from "./Skills.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <div className="resume">
            <Hero name={Resume.name} title={Resume.title} />
            <div className="content">
                <div className="main_content">
                    <Summary summary={Resume.summary} />
                    <Jobs jobs={Resume.jobs} />
                    <Education education={Resume.education} />
                </div>
                <div className="sidebar_wrapper">
                    <div className="sidebar">
                        <ContactInfo />
                        <Skills languageSkills={Resume.language_skills} hardSkills={Resume.hard_skills} />
                    </div>
                </div>
            </div>
        </div>
    </React.StrictMode>
);
