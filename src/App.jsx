import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Options from "./components/Options";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { languages } from "./helpers/Languages";
import { colorThemeObj, languageTheme } from "./helpers/Theme";
import { sections } from "./helpers/Sections";
import "./style/style.css";
import ProjectSelect from "./components/ProjectSelect";

function App() {
  const [sectionActive, setSectionActive] = useState(sections.PROJECTS);
  const [lanTheme, setLanTheme] = useState(languageTheme.ES);
  const [languageSelect, setLanguageSelect] = useState(languages.HTML);
  const [colorTheme, setColorTheme] = useState(colorThemeObj.LIGHT);
  const [projectSelect, setProjectSelect] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <div
      className={`appContainer ${
        colorTheme === colorThemeObj.LIGHT ? "light" : undefined
      }`}
    >
      <NavBar
        lanTheme={lanTheme}
        windowSize={windowSize}
        setLanTheme={setLanTheme}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
      />
      <Header lanTheme={lanTheme} />
      <Options
        setSectionActive={setSectionActive}
        sectionActive={sectionActive}
        lanTheme={lanTheme}
        setProjectSelect={setProjectSelect}
      />
      {sectionActive === sections.PROJECTS && !projectSelect && (
        <Projects lanTheme={lanTheme} setProjectSelect={setProjectSelect} />
      )}
      {projectSelect && sectionActive === sections.PROJECTS && (
        <ProjectSelect
          projectSelect={projectSelect}
          lanTheme={lanTheme}
          windowSize={windowSize}
        />
      )}
      {sectionActive === sections.SKILLS && (
        <Skills
          lanTheme={lanTheme}
          languageSelect={languageSelect}
          setLanguageSelect={setLanguageSelect}
          colorTheme={colorTheme}
          windowSize={windowSize}
        />
      )}
    </div>
  );
}

export default App;
