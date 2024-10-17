import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Resume} from "./Resume.js";
import {ContactInfo} from "./ContactInfo.js";
import {Summary} from "./Summary.js";
import Skills from "./Skills.js";
import Education from "./Education.js";
import {Jobs} from "./Jobs.js";
import {Hero} from "./Hero.js";
import Interests from "./Interests.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <div className={"resume"}>
          <Hero/>
          <div className={"content"}>
              <div className={"main_content"}>
                  <Summary summary={Resume.summary}/>
                  <Jobs/>
                  <Education education={Resume.education}/>
              </div>
              <div className={"sidebar_wrapper"}>
                  <div className={"sidebar"}>
                      <ContactInfo/>
                      <Skills skills={Resume.skills}/>
                      {/*<Interests />*/}
                  </div>
              </div>
          </div>
      </div>
  </React.StrictMode>
)
;
