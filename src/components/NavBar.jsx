import React, { useState } from "react";
import { colorThemeObj, languageTheme } from "../helpers/Theme";
import ContactMe from "./ContactMe";
import DarkModeToggle from "react-dark-mode-toggle";

const NavBar = ({
  lanTheme,
  setLanTheme,
  colorTheme,
  setColorTheme,
  windowSize,
}) => {
  const [contactOpen, setContactOpen] = useState(false);
  const handleChangeColor = () => {
    setColorTheme(
      colorTheme === colorThemeObj.LIGHT
        ? colorThemeObj.DARK
        : colorThemeObj.LIGHT
    );
  };

  return (
    <>
      <div className="nav_bar">
        <div
          className="languageSelector"
          onClick={() =>
            setLanTheme(
              lanTheme === languageTheme.EN
                ? languageTheme.ES
                : languageTheme.EN
            )
          }
        >
          <p>{lanTheme}</p>
          <img src={`./images/${lanTheme}.jpg`} alt={lanTheme} />
        </div>

        <DarkModeToggle
          onChange={handleChangeColor}
          checked={colorTheme === colorThemeObj.LIGHT ? false : true}
          speed={1}
          size={windowSize <= 600 ? 60 : 80}
        />

        <div>
          <input
            type="button"
            value={lanTheme === languageTheme.EN ? "Contact me" : "Contáctame"}
            className={contactOpen ? "contactMeSelect" : undefined}
            onClick={() => setContactOpen(!contactOpen)}
          />
          {contactOpen && <ContactMe windowSize={windowSize} />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
