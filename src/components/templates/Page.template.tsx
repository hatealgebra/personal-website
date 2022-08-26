import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../../globalStyle";
import useWindowSize from "../../utils/hooks/useWindowSize";
import MenuButton from "../atoms/button/MenuButton";
import MobileMenu from "../organisms/mobileMenu/MobileMenu";
import Footer from "../organisms/footer/Footer";
import TopBar from "../organisms/topBar/TopBar";
import ContextProviderComponent from "../particles/ContextProviderComponent";
import Theme from "../particles/Theme";

const PageContainer = styled.main`
  overflow: hidden;
  background: white;
`;

interface PageTemplateProps {
  children: any;
  woFooter?: boolean;
}

const PageTemplate = ({ children, woFooter }: PageTemplateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  return (
    <ContextProviderComponent>
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
    </ContextProviderComponent>
  );
};

export default PageTemplate;
