import TextScramble from "@twistezo/react-text-scramble";
import { headerText } from "../helpers/PageTexts";
import { languageTheme } from "../helpers/Theme";

const Header = ({ lanTheme }) => {
  return (
    <>
      <div className="header">
        <div className="header_text">
          {lanTheme === languageTheme.EN && (
            <TextScramble
              texts={[headerText.FIRST["EN"]]}
              className={"header_textFirst"}
            />
          )}
          {lanTheme === languageTheme.ES && (
            <TextScramble
              texts={[headerText.FIRST["ES"]]}
              className={"header_textFirst"}
            />
          )}

          <TextScramble texts={["HECTOR A."]} className={"header_textSecond"} />
          <TextScramble
            texts={["GOMEZ ROBAINA"]}
            className={"header_textSecond"}
          />

          {lanTheme === languageTheme.EN && (
            <TextScramble
              texts={[headerText.SECOND["EN"]]}
              className={"header_textThrid"}
              nextLetterSpeed={15}
            />
          )}
          {lanTheme === languageTheme.ES && (
            <TextScramble
              texts={[headerText.SECOND["ES"]]}
              className={"header_textThrid"}
              nextLetterSpeed={15}
            />
          )}
        </div>
        <div className="header_image_container">
          <img src="./images/Avatar.png" alt="portfolio-avatar" />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Header;
