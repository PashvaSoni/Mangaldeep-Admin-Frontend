import { createGlobalStyle, css } from "styled-components";
import { ThemeProp } from './Context/ThemeContext'
// As our baseTheme is nested object of styles we need to use css and than import whole thing to GlobalStyles... Ref : https://github.com/styled-components/styled-components/issues/3391#issuecomment-1220370337
const BodyGlobalStyle = css`
    body{
        font-family:${(prop) => prop.theme.font.fontStyle}, consolas, serif;
        background-color:${(prop) => prop.theme.color.color1};
        color:${(prop) => prop.theme.font.fontColor} !important;
        * :not(h1,h2,h3,h4){
            font-size:1rem !important;
        }
        input::placeholder, select::placeholder, textarea::placeholder {
            color:${(prop) => prop.theme.font.fontColor} !important;
        }
        
        label,h1,h2,h3,h4,span,a,div{
            color:${(prop) => prop.theme.font.fontColor} !important;
        }

        input{
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
        }
        .ant-input-password, .ant-input-password-icon, .ant-input-affix-wrapper, .ant-picker{
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
        }
        textarea{
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
        }


        .ant-select-selector , .ant-select-arrow, .ant-notification, .ant-table {
            background-color:transparent !important;
            color:${(prop) => prop.theme.font.fontColor} !important;
        }
        
        .ant-collapse-content-box, .ant-pagination-item, .ant-picker-panel-container, .ant-tooltip-inner{
            background-color:${(prop) => prop.theme.color.color2} !important;
        }
        .ant-table{
            th{
                color:${(prop) => prop.theme.font.fontColor} !important;
                background-color:${(prop) => prop.theme.color.color2} !important;
                text-align:center;
            }
            .ant-table-tbody>tr.ant-table-row:hover>td{
                background-color:${(prop) => prop.theme.color.color2} !important;
            }
        }
        
        .ant-table-cell-fix-left, .ant-table-cell-fix-right{
            background-color:${(prop) => prop.theme.color.color1};
        }

        .ant-collapse-header,  .ant-notification-notice, .ant-slider-track, .ant-btn-primary{
            background-color:${(prop) => prop.theme.color.color3} !important;
        } 

        .ant-pagination-item-link, .ant-picker-time-panel-cell-inner{
            background-color:${(prop) => prop.theme.color.color3} !important;
        } 
        .ant-divider, .ant-slider-handle{
            background-color:${(prop) => prop.theme.font.fontColor} !important;
        }
        .ant-form-item-explain-error{
            color:red !important;
        }
    }
`;

const GlobalStyles = createGlobalStyle<{ theme: ThemeProp }>`
    html{
        font-size:${(prop) => prop.theme.font.fontSize}rem;
    }
    ${BodyGlobalStyle}
    `;

// body{
//     font-family:consolas;
//     font-size:${(prop)=>{console.log(prop);return 1}}rem;
// }
export default GlobalStyles;