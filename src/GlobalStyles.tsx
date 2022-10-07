import { createGlobalStyle, css } from "styled-components";

// As our baseTheme is nested object of styles we need to use css and than import whole thing to GlobalStyles... Ref : https://github.com/styled-components/styled-components/issues/3391#issuecomment-1220370337
const BodyGlobalStyle = css`
    body{
        font-family:consolas;
        font-size:${(prop) => prop.theme.font}rem;
        background-color:${(prop) => prop.theme.color.color1};
        color:${(prop) => prop.theme.font.fontColor} !important;

        input::placeholder, select::placeholder, textarea::placeholder {
            color:${(prop) => prop.theme.font.fontColor} !important;
        }
        
        label,h1,h2,h3,h4,span{
            color:${(prop) => prop.theme.font.fontColor} !important;
        }

        input{
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
        }
        .ant-input-password, .ant-input-password-icon{
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
        }
        textarea{
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
        }


        .ant-select-selector , .ant-select-arrow  {
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
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