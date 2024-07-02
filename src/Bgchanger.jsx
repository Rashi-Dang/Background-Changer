import React from 'react'
import { useState, useEffect } from 'react'

function Bgchanger () {
    const [color,setColor] = useState("burlywood")

    const click = color =>{
      setColor(color)
    }
    useEffect(()=>{
      document.body.style.backgroundColor = color
    },[color])
    
  return (
    <>
      <h1 className='h1'>Background Color Changer</h1>
    {/* <div className='maindiv'> */}
      <div className="innerdiv">
      <button className='btn' onClick={() =>{ click("crimson")}} style={{backgroundColor:'crimson'}}></button>
      <button className='btn' onClick={() =>{ click("olive")}} style={{backgroundColor:'olive'}}></button>
      <button className='btn' onClick={() =>{ click("pink")}} style={{backgroundColor:'pink'}}></button >
      <button className='btn' onClick={() =>{ click("teal")}} style={{backgroundColor:'teal'}}></button>
      <button className='btn' onClick={() =>{ click("palevioletred")}} style={{backgroundColor:'palevioletred'}}></button>
      </div>
    {/* </div> */}
    </>
  )
}

export default Bgchanger
