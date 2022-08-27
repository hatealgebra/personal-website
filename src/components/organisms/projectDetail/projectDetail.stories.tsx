import React, { useEffect } from "react";
import ProjectModalContext, {
  OPEN_MODAL,
} from "../../../context/ProjectModalContext";

import ProjectDetail from "./ProjectDetail";

// export const ProjectDetailExample = () => {
//   const { action } = React.useContext(ProjectModalContext);
//   useEffect(() => {
//     action({
//       type: OPEN_MODAL,
//       payload: {
//         heading: "Random Project",
//         techStack: ["React", "Typescript"],
//         date: 313214151431,
//         infoProject: "Hello world!",
//         image: null,
//         liveLink: "https://localhost:6006",
//         isOpen: true,
//       },
//     });
//   }, []);

//   return <ProjectDetail />;
// };

export default {
  title: "Molecules/Project Detail",
  component: ProjectDetail,
};
