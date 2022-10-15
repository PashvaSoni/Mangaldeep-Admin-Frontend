import React, { useState } from 'react';
import { Tabs, Divider, Slider, Input, Button, Space } from 'antd';
import styled, { useTheme } from 'styled-components';
import { ThemeProp, useCurrentTheme } from '../Context/ThemeContext';

import light from '../Assets/LightThemeDashboardLayout.png';
import dark from '../Assets/DarkThemeDashboardLayout.png';


const Settings = () => {
    const { currentTheme, setCurrentTheme, setTheme } = useCurrentTheme();
    const theme = useTheme() as ThemeProp;
    const [styleVal,setStyleVal]= useState(theme.font.fontStyle);

    const onApplyStyles=()=>{
        setTheme({ ...theme, font: { ...theme.font, fontStyle:styleVal } });
        localStorage.setItem('fontStyle',styleVal);
    }

    const onValueChange = (val: number) => {
        console.log(val / 100);
        setTheme({ ...theme, font: { ...theme.font, fontSize: val / 100 } });
        localStorage.setItem('fontSize',(val/100).toString());
    }
    return (
        <Settings__Container>
            <Tabs
                defaultActiveKey="1"
                tabPosition={"top"}
            >
                <Tabs.TabPane tab="General Settings" key={1}>
                    <div className="vflex">

                        <div className='Theme__Setting vflex'>
                            <h2>Customize your theme</h2>
                            <Divider />
                            <p>You can customize your layout by selecting any of the below theme ... :)</p>
                            <div className='hflex Image__Container'>
                                <img src={light} alt={"Light_Theme"} onClick={() => { setCurrentTheme('light'); localStorage.setItem('theme','light') }} />
                                <img src={dark} alt={"Dark_Theme"} onClick={() => { setCurrentTheme('dark');localStorage.setItem('theme','dark') }} />
                            </div>
                        </div>

                        <div className='Font__Setting vflex'>
                            <h2>Customize your font styles</h2>
                            <Divider />
                            <div className='hflex'>
                                <div className="Font__Size" style={{ width: "100%", padding: "1rem" }}>
                                    <p>Adjust your font size based on your requirnments</p>
                                    <Slider defaultValue={theme.font.fontSize*100} min={100} max={200} onChange={onValueChange} tooltip={{ formatter: (val = 100) => `Font Size : ${val - 99}` }} />
                                </div>
                                <div className="Font__Style" style={{ width: "100%", padding: "1rem" }}>
                                    <p>Change your font style based on your taste</p>
                                    <div className="hflex">
                                            Enter your style :
                                            <Input placeholder='Style ...' style={{ width: '10rem' }} value={styleVal} onChange={(e)=>{setStyleVal(e.target.value)}} />
                                            <Button type='primary'onClick={onApplyStyles} >Apply</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.TabPane>

            </Tabs>
        </Settings__Container>
    )
}

export default Settings;

const Settings__Container = styled.div`
    padding:0.5rem;
    p{
        text-align:center;
    }
    .Image__Container{
        img{
            width:100%;
            max-width:20rem;
            aspect-ratio:2:1;
            border:2px solid ${(prop) => prop.theme.font.fontColor};
            cursor:pointer;
            margin:auto auto;
        }
        img:hover{
            transform: scaleY(1.1);
            opacity: 0.8;
            transition-duration: 0.3s;
        }
    }
    .hflex{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        gap:0.5rem;
    }
    .vflex{
        display:flex;
        flex-direction:column;
    }
    .vflex>*{
        margin:0.5rem;
    }

    @media ${(prop) => prop.theme.device.mobile} { 
        width:100%;
        text-align:center;
        padding:0.5rem;
        .hflex{
            flex-direction:column;
            align-items:center;
        }
        .Image__Container{
            img{
                margin:0.3rem 0rem;
            }
        }
    }
    @media ${(prop) => prop.theme.device.tablet} {
    }
    @media ${(prop) => prop.theme.device.laptop} { 
    }
`;
