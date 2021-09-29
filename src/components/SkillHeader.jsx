import HTML from "./svg/HTML";
import CSS from "./svg/CSS";
import NodeJS from "./svg/NodeJS";
import MongoDB from "./svg/MongoDB";
import Git from "./svg/Git";
import ReactJS from "./svg/ReactJS";
import MySQL from "./svg/MySQL";
import { languages } from "../helpers/Languages";
import { colorThemeObj } from "../helpers/Theme";
import NextJS from "./svg/NextJS";

const SkillHeader = ({
  languageSelect,
  setLanguageSelect,
  colorTheme,
  windowSize,
}) => {
  const normalSize = windowSize <= 600 ? 25 : 45;

  const handleChangeLanguage = (e) => {
    setLanguageSelect(languages[e.target.id]);
  };

  return (
    <div className="skills_header">
      <HTML
        size={normalSize}
        language={languages.HTML.name}
        color={
          languageSelect?.name === languages.HTML.name
            ? languages.HTML.color
            : colorTheme === colorThemeObj.LIGHT
            ? "black"
            : "white"
        }
        handleChangeLanguage={handleChangeLanguage}
      />
      <CSS
        size={normalSize}
        language={languages.CSS.name}
        color={
          languageSelect?.name === languages.CSS.name
            ? languages.CSS.color
            : colorTheme === colorThemeObj.LIGHT
            ? "black"
            : "white"
        }
        handleChangeLanguage={handleChangeLanguage}
      />
      <NodeJS
        size={normalSize}
        language={languages.NODEJS.name}
        color={
          languageSelect?.name === languages.NODEJS.name
            ? languages.NODEJS.color
            : colorTheme === colorThemeObj.LIGHT
            ? "black"
            : "white"
        }
        handleChangeLanguage={handleChangeLanguage}
      />
      <MongoDB
        size={normalSize}
        language={languages.MONGODB.name}
        color={
          languageSelect?.name === languages.MONGODB.name
            ? languages.MONGODB.color
            : colorTheme === colorThemeObj.LIGHT
            ? "black"
            : "white"
        }
        handleChangeLanguage={handleChangeLanguage}
      />
      <Git
        size={normalSize}
        language={languages.GIT.name}
        color={
          languageSelect?.name === languages.GIT.name
            ? languages.GIT.color
            : colorTheme === colorThemeObj.LIGHT
            ? "black"
            : "white"
        }
        handleChangeLanguage={handleChangeLanguage}
      />
      <ReactJS
        size={normalSize}
        language={languages.REACT.name}
        color={
          languageSelect?.name === languages.REACT.name
            ? languages.REACT.color
            : colorTheme === colorThemeObj.LIGHT
            ? "black"
            : "white"
        }
        handleChangeLanguage={handleChangeLanguage}
      />
      <NextJS
        width={window.innerWidth <= 600 ? 50 : 80}
        height={normalSize}
        color={colorTheme === colorThemeObj.LIGHT ? "black" : "white"}
        language={languages.NEXTJS.name}
        handleChangeLanguage={handleChangeLanguage}
      />
      <MySQL
        width={window.innerWidth <= 600 ? 50 : 80}
        height={normalSize}
        color={
          languageSelect?.name === languages.MYSQL.name
            ? languages.MYSQL.color
            : colorTheme === colorThemeObj.LIGHT
            ? "black"
            : "white"
        }
        language={languages.MYSQL.name}
        handleChangeLanguage={handleChangeLanguage}
      />
    </div>
  );
};

export default SkillHeader;
