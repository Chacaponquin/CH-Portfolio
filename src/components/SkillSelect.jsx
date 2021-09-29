import TextScramble from "@twistezo/react-text-scramble";
import { languages } from "../helpers/Languages";
import { colorThemeObj, languageTheme } from "../helpers/Theme";
import CSS from "./svg/CSS";
import Git from "./svg/Git";
import HTML from "./svg/HTML";
import MongoDB from "./svg/MongoDB";
import MySQL from "./svg/MySQL";
import NextJS from "./svg/NextJS";
import NodeJS from "./svg/NodeJS";
import ReactJS from "./svg/ReactJS";

const SkillSelect = ({ languageSelect, lanTheme, windowSize, colorTheme }) => {
  const selectSize = windowSize <= 600 ? 100 : 200;

  return (
    <>
      <div className="skill_select">
        {languageSelect?.name === languages.HTML.name && (
          <>
            <HTML size={selectSize} color={languageSelect.color} />
            {lanTheme === languageTheme.EN && (
              <TextScramble
                texts={[languageSelect.description["EN"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
            {lanTheme === languageTheme.ES && (
              <TextScramble
                texts={[languageSelect.description["ES"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
          </>
        )}
        {languageSelect?.name === languages.CSS.name && (
          <>
            <CSS size={selectSize} color={languageSelect.color} />
            {lanTheme === languageTheme.EN && (
              <TextScramble
                texts={[languageSelect.description["EN"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
            {lanTheme === languageTheme.ES && (
              <TextScramble
                texts={[languageSelect.description["ES"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
          </>
        )}
        {languageSelect?.name === languages.NODEJS.name && (
          <>
            <NodeJS size={selectSize} color={languageSelect.color} />
            {lanTheme === languageTheme.EN && (
              <TextScramble
                texts={[languageSelect.description["EN"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
            {lanTheme === languageTheme.ES && (
              <TextScramble
                texts={[languageSelect.description["ES"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
          </>
        )}
        {languageSelect?.name === languages.MONGODB.name && (
          <>
            <MongoDB size={selectSize} color={languageSelect.color} />
            {lanTheme === languageTheme.EN && (
              <TextScramble
                texts={[languageSelect.description["EN"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
            {lanTheme === languageTheme.ES && (
              <TextScramble
                texts={[languageSelect.description["ES"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
          </>
        )}
        {languageSelect?.name === languages.GIT.name && (
          <>
            <Git size={selectSize} color={languageSelect.color} />
            {lanTheme === languageTheme.EN && (
              <TextScramble
                texts={[languageSelect.description["EN"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
            {lanTheme === languageTheme.ES && (
              <TextScramble
                texts={[languageSelect.description["ES"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
          </>
        )}
        {languageSelect?.name === languages.REACT.name && (
          <>
            <ReactJS size={selectSize} color={languageSelect.color} />
            {lanTheme === languageTheme.EN && (
              <TextScramble
                texts={[languageSelect.description["EN"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
            {lanTheme === languageTheme.ES && (
              <TextScramble
                texts={[languageSelect.description["ES"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
          </>
        )}
        {languageSelect?.name === languages.NEXTJS.name && (
          <>
            <NextJS
              width={windowSize.innerWidth <= 600 ? 150 : 300}
              height={selectSize}
              color={colorTheme === colorThemeObj.LIGHT ? "black" : "white"}
            />
            {lanTheme === languageTheme.EN && (
              <TextScramble
                texts={[languageSelect.description["EN"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
            {lanTheme === languageTheme.ES && (
              <TextScramble
                texts={[languageSelect.description["ES"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
          </>
        )}
        {languageSelect?.name === languages.MYSQL.name && (
          <>
            <MySQL
              width={windowSize.innerWidth <= 600 ? 150 : 300}
              height={selectSize}
              color={languageSelect.color}
            />
            {lanTheme === languageTheme.EN && (
              <TextScramble
                texts={[languageSelect.description["EN"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
            {lanTheme === languageTheme.ES && (
              <TextScramble
                texts={[languageSelect.description["ES"]]}
                className={"skill_select_text"}
                nextLetterSpeed={10}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default SkillSelect;
