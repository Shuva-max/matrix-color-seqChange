import React from 'react'

function Box({colors, onBoxClick}) {
    const boxStyle = {
        width: '100px', 
        height: '100px', 
        backgroundColor: colors, 
        border:'1px solid black',
        margin: '5px', 
        cursor: 'pointer',
        display: 'inline-block'
    }
  return (
    <div style={boxStyle} onClick={onBoxClick}>
      
    </div>
  )
}

export default Box
