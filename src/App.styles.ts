import styled, { createGlobalStyle } from "styled-components";
import BGImage from "../src/images/question2.png";

export const GlobalStyle = createGlobalStyle`
   
    body{
        background-image:url(${BGImage});
        background-size:cover;
        background-repeat:no-repeat;
    }

    html {
        height:100%;
    }
`;
