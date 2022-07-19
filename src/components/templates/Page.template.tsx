import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyle";
import useWindowSize from "../../utils/hooks/useWindowSize";
import MenuButton from "../atoms/menuButton/MenuButton";
import MobileMenu from "../molecules/mobileMenu/MobileMenu";
import Footer from "../organisms/footer/Footer";
import TopBar from "../organisms/topBar/TopBar";
import Theme from "../particles/Theme";

const PageContainer = styled.main`
  overflow: hidden;
`;

interface PageTemplateProps {
  children: any;
  woFooter?: boolean;
}

const PageTemplate = ({ children, woFooter }: PageTemplateProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();

  return (
    <PageContainer>
      <GlobalStyle />
      <title>Pavel Vondra's site</title>
      {width && width >= Theme.breakpoints.tablet ? (
        <TopBar />
      ) : (
        <>
          <MobileMenu isOpen={isOpen} close={() => setIsOpen(false)} />
          <MenuButton dispatch={() => setIsOpen(true)} />
        </>
      )}
      {children}
      {!woFooter && <Footer />}
    </PageContainer>
  );
};

export default PageTemplate;
