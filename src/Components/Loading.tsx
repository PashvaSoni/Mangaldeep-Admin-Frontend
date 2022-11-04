import React from 'react'
import { Spin } from 'antd'
const Loading = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"80vh",zIndex:100,opacity:"0.5"}}><Spin tip="Loading ..." size="large" /></div>
  )
}

export default Loading