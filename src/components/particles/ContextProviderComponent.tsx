import React from "react";
import { ProjectModalProvider } from "../../context/ProjectModalContext";

const ContextProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ProjectModalProvider>{children}</ProjectModalProvider>;
};

export default ContextProviderComponent;
