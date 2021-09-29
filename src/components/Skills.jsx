import SkillHeader from "./SkillHeader";
import SkillSelect from "./SkillSelect";

const Skills = ({
  lanTheme,
  languageSelect,
  setLanguageSelect,
  colorTheme,
  windowSize,
}) => {
  return (
    <>
      <div className="skills_container">
        <SkillHeader
          languageSelect={languageSelect}
          setLanguageSelect={setLanguageSelect}
          colorTheme={colorTheme}
          windowSize={windowSize}
        />
        <SkillSelect
          languageSelect={languageSelect}
          lanTheme={lanTheme}
          windowSize={windowSize}
          colorTheme={colorTheme}
        />
      </div>
    </>
  );
};

export default Skills;
