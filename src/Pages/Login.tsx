import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

import { useCurrentTheme } from '../Context/ThemeContext'
import {config} from '../Constant'

import axios from 'axios';

export const Login = () => {
    const { currentTheme,setCurrentTheme } = useCurrentTheme();
    const [form] = Form.useForm();
    const [formData,setformData] = useState({phonenumber:"",password:""});

    const HandleSubmit=async()=>{
        console.log(formData);
        try{
            const response= await axios.post(config.URLS.BACKEND_URL+'users/signin',formData);
            console.log(response);
        }
        catch(err)
        {
            console.error(err)
        }
        
    }

    return (
        <LoginContainer>
            <LoginFormContainer>
                <Form
                    form={form}
                    name="Login_Form"
                    initialValues={{}}
                    autoComplete="off"
                    layout='vertical'
                >
                    <Form.Item 
                        label="Phone Numnber"
                        name="phonenumber"
                        rules={[{ required: true, message: 'Please input your phonenumber!', len:10 }]}
                    >
                        <Input placeholder='Enter Phonenumber ...' onChange={(e)=>{setformData({...formData,phonenumber:e.target.value})}}/>
                    </Form.Item>
                    <Form.Item 
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Enter Password ...' onChange={(e)=>{setformData({...formData,password:e.target.value})}}/>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={HandleSubmit} type="primary">Login</Button>
                    </Form.Item>
                </Form>
            </LoginFormContainer>
        </LoginContainer>
    )
};

const LoginContainer = styled.div`
    width:100%;
    border:1px solid red;
    display:flex;
    justify-content:center;
    padding:12px;

`;

const LoginFormContainer=styled.div`
    background-color:${(prop)=>prop.theme.color.backgroundColor};
    padding:12px;
    border-radius:15px;
    
    @media ${(prop)=>prop.theme.device.mobile} { 
        width:100%;
    }
    @media ${(prop)=>prop.theme.device.tablet} {
        width:60%; 
    }
    @media ${(prop)=>prop.theme.device.laptop} { 
        width:50%; 
    }
`;