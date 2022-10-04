import React,{useState} from 'react'
import styled from 'styled-components'
import {FaPowerOff} from 'react-icons/fa';
import {GrUserSettings} from 'react-icons/gr';
import { useCurrentTheme } from '../Context/ThemeContext';
import { Switch } from 'antd';

const Header = () => {
  const [th,setth] = useState('light');
  const {currentTheme,setCurrentTheme} = useCurrentTheme();

  const onThemeChange=()=>{
    setCurrentTheme(currentTheme==='light'?'dark':'light');
  }

  return (
    <HeaderContainer>
      <div className='Logo Container__Item'>MangalDeep</div>
      <div>
        <Switch onChange={onThemeChange} checkedChildren="Light" unCheckedChildren="Dark" defaultChecked />
        <ul className='Link__Container'>
          <li className='Container__Item'><FaPowerOff/></li>
          <li className='Container__Item'><GrUserSettings/></li>
        </ul>
      </div>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer= styled.div`
  display:flex;
  align-items:center;
  border:1px solid red;
  justify-content:space-between;
  background-color:${(prop)=>prop.theme.color.color4};

  .Link__Container{
    display:flex;
    gap:1rem;
  }

  .Container__Item{
    padding:0.2rem;
    cursor:pointer;
  }
`;