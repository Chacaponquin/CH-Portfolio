import React from "react";
import { optionText } from "../helpers/PageTexts";
import { sections } from "../helpers/Sections";

const Options = ({
  setSectionActive,
  sectionActive,
  lanTheme,
  setProjectSelect,
}) => {
  const handleChangeSection = (e) => {
    setProjectSelect(null);
    setSectionActive(e.target.id);
  };

  return (
    <>
      <div className="options_container">
        <p
          className={`option ${
            sectionActive === sections.PROJECTS && "option-select"
          }`}
          id={sections.PROJECTS}
          onClick={handleChangeSection}
        >
          {optionText.PROJECTS[lanTheme]}
        </p>
        <p
          className={`option ${
            sectionActive === sections.SKILLS && "option-select"
          }`}
          onClick={handleChangeSection}
          id={sections.SKILLS}
        >
          {optionText.SKILLS[lanTheme]}
        </p>
      </div>
    </>
  );
};

export default Options;
