import React from "react";
import { languageTheme } from "../helpers/Theme";
import TextScramble from "@twistezo/react-text-scramble";
import Github from "./svg/Github";

const ProjectSelect = ({ projectSelect, lanTheme, widnowSize }) => {
  return (
    <div className="projectSelectContainer">
      <div className="projectSelect">
        <img src={projectSelect.image} alt={projectSelect.title} />
        <h1>{projectSelect.title}</h1>

        {lanTheme === languageTheme.EN && (
          <TextScramble
            texts={[projectSelect.description["EN"]]}
            nextLetterSpeed={5}
            className={"projectSelectInf"}
          />
        )}
        {lanTheme === languageTheme.ES && (
          <TextScramble
            texts={[projectSelect.description["ES"]]}
            nextLetterSpeed={5}
            className={"projectSelectInf"}
          />
        )}

        <div className="projectSelectActions">
          <div className="tecInfSection">
            {projectSelect.tec.map((el, i) => (
              <li key={i}>
                <TextScramble texts={[el]} />
              </li>
            ))}
          </div>

          <div className="inputRedirectSection">
            <a
              href={projectSelect.gitHubLink}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="inputRedirect">
                <Github size={widnowSize <= 600 ? 20 : 30} />
                <TextScramble texts={["GitHub"]} />
              </div>
            </a>

            <a
              href={projectSelect.pageLink}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="inputRedirect">
                <p>{lanTheme === languageTheme.EN ? "Visit" : "Visitar"}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSelect;
