import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Collapse, Input } from 'antd'
const { Panel } = Collapse;

const menu = [
    {
        title: 'Offers',
        submenu: [
            { name: 'All Offers', path: 'offer/all' },
            { name: 'Create Offer', path: 'offer/create' },
            { name: 'Update Offer', path: 'offer/update' },
            { name: 'Delete Offer', path: 'offer/delete' }
        ]
    },
    {
        title: 'Products',
        submenu: [
            { name: 'All Products', path: 'product/all' },
            { name: 'Create Product', path: 'product/create' },
            { name: 'Update Product', path: 'product/update' },
            { name: 'Delete Product', path: 'product/delete' }
        ]
    },
    {
        title: 'Categories',
        submenu: [
            { name: 'All Categories', path: 'category/all' },
        ]
    },
    {
        title: 'Occasions',
        submenu: [
            { name: 'All Occasions', path: 'occasion/all' },
        ]
    },
    {
        title: 'Class',
        submenu: [
            { name: 'All Class', path: 'class/all' },
        ]
    },
    { title: 'RolesPermission', submenu: [{ name: 'My Roles and Permissions', path: '/myroles' }] }

]

const Sidebar = () => {
    const [BarVisisble, SetBarVisible] = useState(false);
    const [val, Setval] = useState('');
    const [Result, SetResult] = useState(menu);
    const onBarClick = () => {
        SetBarVisible(!BarVisisble);
    }

    useEffect(()=>{
        if(val===''){
            SetResult(menu);
            return;
        }
        let finalResult = Result.map(({submenu,title})=>{
            let tsub=submenu.filter((ti)=>ti.name.toLowerCase().includes(val.toLowerCase()));
            return {submenu:tsub,title}
        })
        SetResult(finalResult);
    }
    ,[val]);

    return (
        <SidebarContainer>
            <div className='Menu__Items__Container' style={{ display: `${BarVisisble ? 'flex' : 'none'}` }}>
            <Input placeholder='Search..' value={val} allowClear onChange={(e)=>{Setval(e.target.value)}}/>
                {Result ?
                    (<Collapse expandIconPosition='end' bordered={false}>
                        {Result.map((item, index) => {
                            return <Panel key={index} header={`${item.title}`}>
                                {item.submenu ? (<div className='Submenu__Link__Container'>{item.submenu.map((i, id) => { return <Link className='Submenu__Link__Item' key={index + '_' + id} to={i.path}>{i.name}</Link> })}</div>) : (<p>No Submenu Available</p>)}
                            </Panel>
                        })}
                    </Collapse>)
                    : (<span>No Menu Available</span>)}
            </div>
            <div className='Arrow__Button' onClick={onBarClick}>
                {BarVisisble ? <FaChevronLeft /> : <FaChevronRight />}
            </div>
        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
    background-color:${(prop) => prop.theme.color.color2};
    display:flex;
    height:90%;
    width:max-content
    border:1px solid ${(prop) => prop.theme.color.color4};
    border-left:none;
    position: absolute;
    left:0;
    z-index:10;

    .Menu__Items__Container{
        gap:0.5rem;
        background-color:transparent;
        padding:0.2rem 0.2rem;
        display:none;
        flex-direction:column;
        overflow:scroll;
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none; 
    }
    
    .Arrow__Button{
        display:flex;
        align-items:center;
        cursor:pointer;
    }

    .Submenu__Link__Container{
        display:flex;
        flex-direction:column;
    }

    .Submenu__Link__Item{
        padding:0.2rem 0.5rem;
    }
    .Submenu__Link__Item:hover{
        background-color:${(prop) => prop.theme.color.color4}
    }
`;