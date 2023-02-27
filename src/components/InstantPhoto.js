import React from 'react';

export default function InstantPhoto(props) {
  const defaultStyle = {
    backgroundColor: "white",
    height: 250,
    width: 250,
    padding: 16,
    paddingTop: 32,
    paddingBottom: 72
  }

  const zoomStyle = {
    ...defaultStyle,
    position: "absolute",
    height: 500,
    width: 500,
    justifyContent: "center",
    alignItems: "center",
  }

  const imageStyle = {
    width: "100%",
    height: "auto",
    userSelect: "none",
    draggable: false
  }

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    height: "100%"
  }

  return (
    <div style={props.zoomed ? zoomStyle : defaultStyle} onClick={() => props.onClick(props.img)} className='frame'>
      <div style={imageContainerStyle}>
        <img style={imageStyle} src={props.img} alt=""></img>
      </div>
    </div>
  )
};