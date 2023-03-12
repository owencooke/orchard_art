import {React, useState, useEffect, useRef} from "react";
import InstantPhoto from "../components/InstantPhoto";
import { shoes } from "../galleries";
import styles from "./Shoes.module.css"

export default function Shoes() {
  const [zoomed, setZoomed] = useState(false);
  const [zoomPhoto, setZoomPhoto] = useState();

  function handleShoeClick(img) {
    setZoomed(true)
    setZoomPhoto(img)
  }

  //FIXME create custom Hook, to use in Paintings as well
  const ref = useRef()
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setZoomed(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div>
      <div style={{filter: zoomed ? "blur(1rem)" : "none"}}>
        <h1>Sneakers</h1>
        <p>Custom ordered, hand-painted designs on all your favourite shoes.</p>
        <div className={styles.gallery}>
          {shoes.map((image, idx) => { return (
            <div key={idx} onClick={() => handleShoeClick(image)}>
              <InstantPhoto img={image}/>
            </div>
          )})}
        </div>
      </div>
      { zoomed && 
        <div className={styles.popup}>
          <div ref={ref}>
            <InstantPhoto img={zoomPhoto}/>
          </div>
        </div>
      }
    </div>
  )
};