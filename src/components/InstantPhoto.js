import {React, useState} from 'react';

export default function InstantPhoto(props) {
  // const [styles, setStyles] = useState(() => defaultStyle());
  const frameStyle = defaultStyle();

  function defaultStyle() {
    return {
      backgroundColor: "white",
      height: 240,
      width: 300,
      padding: 16
    }
  }

  const imageStyle = {
    width: "100%"
  }

  return (
    <div style={frameStyle} className='frame'>
      <img style={imageStyle} src={props.img} alt=""></img>
    </div>
  )
};