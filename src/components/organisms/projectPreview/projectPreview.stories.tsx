import React from "react";

import ProjectPreview from "./ProjectPreview";

export const RandomProjectPrevie = () => (
  <ProjectPreview
    heading="random app"
    infoProject="Hello world!"
    techStack={["typescript", "react"]}
    date={9312938128391283}
    children="Hello World Description!"
    image={null}
    liveLink="http://localhost"
  />
);

export default {
  title: "Molecules/Project Preview",
  component: ProjectPreview,
};
