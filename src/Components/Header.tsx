import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars,FaChevronDown,FaChevronUp } from 'react-icons/fa';
import { Switch } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useCurrentTheme } from '../Context/ThemeContext';
import { useAuth } from '../Context/AuthContext';
import { Capitalize } from '../HelperFunction';


const Header = () => {
  const navigate=useNavigate();
  const { currentTheme, setCurrentTheme } = useCurrentTheme();
  const { User, setUser } = useAuth();
  const [MenuVisible, setMenuVisible] = useState(false);
  const onThemeChange = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme',currentTheme === 'light' ? 'dark' : 'light')
  }

  const onLogOut = async () => {
    try {
      // const respone = await axios.post('http://localhost:3000/users/logout', {}, { withCredentials: true })
      // console.log(respone.data)
      localStorage.setItem('token','');
      localStorage.setItem('userinfo','');
      setUser({ token: '', userData: { name: '', phonenumber: '', id: '' } })
      
    }
    catch (err) {
      console.error(err)
    }
  }

  const onMenuClick = () => {
    console.log('clicked')
    setMenuVisible(!MenuVisible);
  }

  return (
    <HeaderContainer >
        <div className='Logo Container__Item'  onClick={()=>navigate('/')}>MangalDeep</div>
        <div className='User__Info'>
        <span>Welcome {Capitalize(User.userData.name) || 'User'}</span>
      </div>
        <div className='Link__Container' style={{display:`${MenuVisible?'flex':'none'}`}}>
          <Switch onChange={onThemeChange} checked={currentTheme==='light'?true:false} checkedChildren="Light" unCheckedChildren="Dark" defaultChecked />
          <span className='Container__Item' onClick={onLogOut}>Logout</span>
          <span className='Container__Item' onClick={()=>navigate('/settings')}>Settings</span>
        </div>
        <div className='Menu__Icon Container__Item' onClick={onMenuClick} >
          <span>{MenuVisible?<FaChevronUp/>:<FaChevronDown/>}</span>
        </div>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
  width:100%;
  height:4rem;
  display:flex;
  gap:0.5rem;
  align-items:center;
  justify-content:space-between;
  background-color:${(prop) => prop.theme.color.color3};
  color:white;
  padding:0rem 1rem;

  .Logo{
    font-size:2rem !important;
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


  .Container__Item{
    padding:0.2rem 0.5rem;
    cursor:pointer;
  }

  .Menu__Icon{
    display:none;
  }



  @media ${(prop) => prop.theme.device.mobile} { 
    height:max-content;
    flex-direction:column;
    .Menu__Icon{
      display:block;
    }
    .Link__Container{
      flex-direction:column;
      display:none;
    }
  }
  @media ${(prop) => prop.theme.device.tablet} {
    flex-direction:row;
    .Link__Container{
      flex-direction:row;
      display:flex !important;
    }
  }
  @media ${(prop) => prop.theme.device.laptop} { 
    flex-direction:row;
    .Link__Container{
      flex-direction:row;
      display:flex !important;
    }
  }

`;
