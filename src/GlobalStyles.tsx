import { createGlobalStyle,css } from "styled-components";

// As our baseTheme is nested object of styles we need to use css and than import whole thing to GlobalStyles... Ref : https://github.com/styled-components/styled-components/issues/3391#issuecomment-1220370337
const BodyGlobalStyle=css`
    body{
        font-family:consolas;
        font-size:${(prop)=>prop.theme.font}rem;
        background-color:${(prop)=>prop.theme.color.color1};

        button{
            background-color:${(prop)=>prop.theme.color.color4} !important;
        }
    }
`;

const GlobalStyles = createGlobalStyle`
    html{
        font-size:16px;
    }
    ${BodyGlobalStyle}
    `;
    
    // body{
    //     font-family:consolas;
    //     font-size:${(prop)=>{console.log(prop);return 1}}rem;
    // }
    export default GlobalStyles;