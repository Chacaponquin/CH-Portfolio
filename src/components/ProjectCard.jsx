import TextScramble from "@twistezo/react-text-scramble";
import { languageTheme } from "../helpers/Theme";

const ProjectCard = ({ project, lanTheme, handleRedirect }) => {
  return (
    <div className="project">
      <img
        src={project.image}
        alt={project.title}
        onClick={handleRedirect}
        id={project.title}
      />
      <TextScramble texts={[project.title]} className={"project_title"} />

      {lanTheme === languageTheme.EN && (
        <TextScramble
          texts={[project.description["EN"]]}
          className={"project_description"}
          nextLetterSpeed={5}
        />
      )}
      {lanTheme === languageTheme.ES && (
        <TextScramble
          texts={[project.description["ES"]]}
          className={"project_description"}
          nextLetterSpeed={5}
        />
      )}
    </div>
  );
};

export default ProjectCard;
