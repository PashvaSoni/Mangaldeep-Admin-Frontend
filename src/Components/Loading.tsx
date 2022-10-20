import React from 'react'
import { Spin } from 'antd'
const Loading = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"80vh"}}><Spin tip="Loading ..." size="large" /></div>
  )
}

export default Loading