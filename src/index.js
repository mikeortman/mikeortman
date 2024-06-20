import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Resume} from "./Resume";
import {ContactInfo} from "./ContactInfo";
import {Summary} from "./Summary";
import Skills from "./Skills";
import Education from "./Education";
import {Jobs} from "./Jobs";
import {Hero} from "./Hero";
import Interests from "./Interests";

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
                      <Interests />
                  </div>
              </div>
          </div>
      </div>
  </React.StrictMode>
)
;
