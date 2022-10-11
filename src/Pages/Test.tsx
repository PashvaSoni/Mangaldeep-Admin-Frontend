import React,{useEffect} from 'react'
import { Input, Select, Button, Switch, Progress, Space,Checkbox, Slider } from 'antd'
import styled from 'styled-components'
import { useCurrentTheme } from '../Context/ThemeContext'
import { OpenNotification } from '../HelperFunction'
const Test = () => {

    return ( 
        <DivContainer>
            <Space direction='vertical'>
                <div style={{display:'flex'}}>
                    <span className='Wbox1' style={{padding:"20px"}}>Box 1</span>
                    <span className='Wbox2' style={{padding:"20px"}}>Box 2</span>
                    <span className='Wbox3' style={{padding:"20px"}}>Box 3</span>
                    <span className='Wbox4' style={{padding:"20px"}}>Box 4</span>
                </div>
                <div style={{display:'flex'}}>
                    <span className='Bbox1' style={{padding:"20px"}}>Box 1</span>
                    <span className='Bbox2' style={{padding:"20px"}}>Box 2</span>
                    <span className='Bbox3' style={{padding:"20px"}}>Box 3</span>
                    <span className='Bbox4' style={{padding:"20px"}}>Box 4</span>
                </div>

                <span>span</span>
                <Input placeholder='hello' />
                <Input.Password placeholder='password' />
                <Input.TextArea placeholder='Textarea' />
                <Select placeholder="Please selkecr"> 
                    <Select.Option value="Hello0">Hello0</Select.Option>
                    <Select.Option value="Hello1">Hello0</Select.Option>
                    <Select.Option value="Hello2">Hello0</Select.Option>
                    <Select.Option value="Hello3">Hello0</Select.Option>

                </Select>
                <Button>Hello</Button>
                <Switch checkedChildren="Light" unCheckedChildren="Dark" defaultChecked />
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
                <Checkbox >Checkbox</Checkbox>
                <Slider defaultValue={30}/>
            </Space>
        </DivContainer>
    )
}

export default Test;

const DivContainer=styled.div`
    .Wbox1{
        background-color:${(prop)=>{return prop.theme.color.color1}};
    }
    .Wbox2{
        background-color:${(prop)=>prop.theme.color.color2};
    }
    .Wbox3{
        background-color:${(prop)=>prop.theme.color.color3};
    }
    .Wbox4{
        background-color:${(prop)=>prop.theme.color.color4};
    }
    .Bbox1{
        background-color:${(prop)=>prop.theme.color.color1};
    }
    .Bbox2{
        background-color:${(prop)=>prop.theme.color.color2};
    }
    .Bbox3{
        background-color:${(prop)=>prop.theme.color.color3};
    }
    .Bbox4{
        background-color:${(prop)=>prop.theme.color.color4};
    }
`;