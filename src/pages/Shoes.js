import {React, useState} from "react";
import InstantPhoto from "../components/InstantPhoto";

export default function Shoes() {
  function getImages() {
    var images = [
      "butterfly",
      "drip",
      "harry",
      "honey",
      "mountain",
      "nhl",
      "tupac_biggie"
    ]

    for (var i = 0; i < images.length; i++) {
      images[i] = "/assets/shoes/" + images[i] + ".JPG"
    }
    return images.map((image, index) => (
      <InstantPhoto
        key={index}
        img={image}
        zoomed={false}
        onClick={handleShoeClick}
      />
    ))
  }

  // const [images, setImages] = useState(() => getImages());
  const images = getImages();

  const [zoomed, setZoomed] = useState(false);
  const [zoomPhoto, setZoomPhoto] = useState();

  function handleShoeClick(img) {
    setZoomed(true)
    setZoomPhoto(img)
    console.log("shoe")
  }

  function handlePageClick(event) {
    for (var elem in images) {
      var outsideClick = typeof event.composedPath === 'function' &&  !event.composedPath().includes(elem);
      if (outsideClick) {
        break
      }
    }
    if (outsideClick) {
      setZoomed(false)
    }
    console.log("page")
  }

  return (
    <div onClick={handlePageClick}>
      <h1>Sneakers</h1>
      <div style={{
        display: "grid", 
        rowGap: 64, 
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyItems: "center",
        filter: zoomed ? "blur(20px)" : "none"
      }}>
        {images}
      </div>
      { zoomed && <div onClick={console.log("div clicked")} style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: 500,
        // width: 500,
        margin: "auto",
        zoom: 1.5
      }}>
        <InstantPhoto img={zoomPhoto} />
      </div>}
    </div>
  )
};