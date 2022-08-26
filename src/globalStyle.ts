import "@fontsource/work-sans/900.css";
import "@fontsource/work-sans/900.css";
import "@fontsource/work-sans/800.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/300.css";

import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/300.css";
import { createGlobalStyle } from "styled-components";

import Theme from "./components/particles/Theme";

import theme from "./components/particles/Theme";
import { DEVICE } from "./utils/helpers";

// FIXME more elegant font import

const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 81.5%;
background-color: white;


 only screen and (min-width: 600px){
    font-size: 90%;
}
 only screen and (min-width: 801px){
    font-size: 95%;
}
 only screen and (min-width: 1200px){
    font-size: 105%;
}
 only screen and (min-width: 1600px){
    font-size: 110%;
}


body{
    height: 100%;
    width: 100%;
    font-family: "Work Sans";
    line-height: 1.3;
    font-weight: 400;
    color: ${theme.color.black};
    overflow-x: hidden;
background-color: white;
-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}

button, p {
    font-family: "MontSerrat", sans-serif;
}


button, a {
    cursor: pointer;
}

h1{
    font-size: ${theme.fontSize["4xl"]};
    font-weight: ${theme.typography.black};
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 1.2;
}
h2{
    font-size: ${theme.fontSize["3xl"]};
    font-weight: ${theme.typography.extrabold};
    text-transform: uppercase;
    letter-spacing: 2px;

}
h3{
    font-size: ${theme.fontSize["2xl"]};
    font-weight: ${theme.typography.semibold};
    text-transform: uppercase;
}
h4{
    font-size: ${theme.fontSize["xl"]};
    font-weight: ${theme.typography.bold};
}
h5{
    font-size: ${theme.fontSize.lg};
    font-weight: ${theme.typography.bold};
}

p{
    font-size: ${theme.fontSize.md};
    margin-top: 1em ;
    line-height: 1.5;
    width: 90%;

     ${DEVICE.mobileL}{
        max-width: 400px;
    }
     ${DEVICE.tablet}{
        max-width: 450px;
    }
     ${DEVICE.desktop}{
        max-width: 500px;
    }
}
.small, .text_small{
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.typography.extrabold};
}

.libre{
    font-family: ${theme.fonts.alt};
    font-style: italic;
    font-weight: ${theme.typography.normal}
}

.justify--right {
    position: relative;
    left: 45%;
    text-align: right;

     ${DEVICE.tablet}{
        left: 0%;
        right: 0%;
    }
}

.gatsby_image{
    overflow:hidden;
    zoom: 50%;
    &:hover{


    }
}

.center{
    display:flex;
    justify-content: center;
}

.text--center{
    text-align: center;
}

.paragraph--center{
    margin-left: auto;
    margin-right: auto;
}

.item--dissapear{
    opacity: 0;
    transition: opacity .8s ease;
    color: "lightgrey";
}

.select--underlined{
    text-decoration: underline !important;
}


}
`;

export default GlobalStyle;
