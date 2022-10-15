import { createGlobalStyle, css } from "styled-components";
import {ThemeProp} from './Context/ThemeContext'
// As our baseTheme is nested object of styles we need to use css and than import whole thing to GlobalStyles... Ref : https://github.com/styled-components/styled-components/issues/3391#issuecomment-1220370337
const BodyGlobalStyle = css`
    body{
        font-family:${(prop)=>prop.theme.font.fontStyle}, consolas, serif;
        background-color:${(prop) => prop.theme.color.color1};
        color:${(prop) => prop.theme.font.fontColor} !important;

        input::placeholder, select::placeholder, textarea::placeholder {
            color:${(prop) => prop.theme.font.fontColor} !important;
        }
        
        label,h1,h2,h3,h4,span,a,div{
            color:${(prop) => prop.theme.font.fontColor} !important;
            font-size:1rem;
        }

        input{
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
        }
        .ant-input-password, .ant-input-password-icon, .ant-input-affix-wrapper{
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
        }
        textarea{
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
        }


        .ant-select-selector , .ant-select-arrow, .ant-notification {
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
        }
        
        .ant-collapse-content-box{
            background-color:${(prop) => prop.theme.color.color2};
        }
        .ant-collapse-header,  .ant-notification-notice, .ant-slider-track{
            background-color:${(prop) => prop.theme.color.color3};
        }

        .ant-divider, .ant-slider-handle{
            background-color:${(prop) => prop.theme.font.fontColor} !important;
        }
    }
`;

const GlobalStyles = createGlobalStyle<{theme: ThemeProp}>`
    html{
        font-size:${(prop)=>prop.theme.font.fontSize}rem;
    }
    ${BodyGlobalStyle}
    `;

// body{
//     font-family:consolas;
//     font-size:${(prop)=>{console.log(prop);return 1}}rem;
// }
export default GlobalStyles;