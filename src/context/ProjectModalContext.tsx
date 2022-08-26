import React, { useReducer } from "react";
import { ProjectDetailProps } from "../components/organisms/projectDetail/ProjectDetail";

enum EActionType {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

export const { OPEN_MODAL, CLOSE_MODAL } = EActionType;

const initialState: ProjectDetailProps | null = null;

export const ProjectModalContext = React.createContext<{
  projectModalState: ProjectDetailProps | null;
  action: React.Dispatch<{ type: EActionType; payload: any }>;
}>({ projectModalState: initialState, action: () => {} });

const projectModalReducer = (
  projectModalState: ProjectDetailProps | null,
  action: { type: EActionType; payload: any }
) => {
  switch (action.type) {
    case EActionType.OPEN_MODAL:
      return { ...action.payload, isOpen: true };
      break;
    case EActionType.CLOSE_MODAL:
      return { ...projectModalState, isOpen: false };
      break;
      return projectModalState;
  }
};

export const ProjectModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projectModalState, action] = useReducer(
    projectModalReducer,
    initialState
  );

  return (
    <ProjectModalContext.Provider value={{ projectModalState, action }}>
      {children}
    </ProjectModalContext.Provider>
  );
};

export default ProjectModalContext;
