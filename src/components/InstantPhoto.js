import {React, useState} from 'react';

export default function InstantPhoto(props) {
  // const [frameStyle, setFrameStyle] = useState(() => defaultStyle());
  // const frameStyle = defaultStyle();
  const [isZoomed, setIsZoomed] = useState(false);

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

  function handleClick() {
    setIsZoomed(prev => !prev)
  }

  const imageStyle = {
    width: "100%",
    height: "auto"
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
    <div style={isZoomed ? zoomStyle : defaultStyle} onClick={handleClick} className='frame'>
      <div style={imageContainerStyle}>
        <img style={imageStyle} src={props.img} alt=""></img>
      </div>
    </div>
  )
};