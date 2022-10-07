import React, { useState } from 'react'
import styled from 'styled-components'
import { FaPowerOff } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { useCurrentTheme } from '../Context/ThemeContext';
import { Slider, Switch } from 'antd';

const Header = () => {
  const [th, setth] = useState('light');
  const { currentTheme, setCurrentTheme } = useCurrentTheme();

  const onThemeChange = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <HeaderContainer>
      <div className='Logo Container__Item'>MangalDeep</div>
      <div className='Link__Container'>
          <Switch onChange={onThemeChange} checkedChildren="Light" unCheckedChildren="Dark" defaultChecked />
          <span className='Container__Item'>Logout</span>
          <span className='Container__Item'>Settings</span>
      </div>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color:${(prop) => prop.theme.color.color3};
  color:white;
  padding:0rem 1rem;

  .Logo{
    font-size:2rem;
  }

  .Link__Container{
    display:flex;
    gap:1rem;
    align-items:center;
    
    .Container__Item{
      border:1px solid white;
      border-radius:5px
    }

    .Container__Item:hover{
      border:1px solid black;
    }
  }

  .Link__Container > *{
    margin:0.5rem 0rem;
  }


  .Container__Item{
    padding:0.2rem 0.5rem;
    cursor:pointer;
  }

`;