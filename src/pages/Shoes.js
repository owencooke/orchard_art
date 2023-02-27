import React from "react";
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
    return images
  }

  // const [images, setImages] = useState(() => getImages());
  const images = getImages();

  return (
    <div>
      <h1>Sneakers</h1>
      <div style={{
        display: "grid", 
        rowGap: 64, 
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyItems: "center"
      }}>
        {images.map((image, index) => (
          <InstantPhoto
            key={index}
            img={image}
          />
        ))}
      </div>
    </div>
  )
};