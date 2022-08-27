import React from "react";
import TopBar from "./TopBar";

export const DesktopTopbar = () => {
  React.useEffect(() => {
    window.scrollBy(0, 250);
  }, []);

  return (
    <div style={{ height: "150vh" }}>
      <TopBar />
    </div>
  );
};

export default {
  title: "Organisms/Top Bar",
  component: TopBar,
};
