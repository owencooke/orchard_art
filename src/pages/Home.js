import { React, useState } from 'react';
import "./Home.css"
import Carousel from 'react-simply-carousel';
import InstantPhoto from '../components/InstantPhoto';
import { shoes } from '../galleries';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <div id="hero" className="img-block">
        <img src={require("../assets/artist2.jpg")} draggable="false" alt=""/>
        <div className="img-block-title">
          <h1>Bye-Bye Pink Panther, Hello Pink Leopard!</h1>
          <p>An art piece designed for an exhibition at the Calgary Zoo,
            inspired by their "Destination Africa" exhibit.
          </p>
          <button className="text-button hidden">View available pieces</button>
        </div>
      </div>

      <Carousel
        containerProps={{
          style: {
            width: "100%",
            height: "400px",
            backgroundColor: "#e0e0e0",
            justifyContent: "space-between",
            alignItems: "center",
            userSelect: "none"
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={5}
        speed={400}
      >
        {shoes.map((image, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 300,
              width: 300,
              boxSizing: "border-box",
              border: "32px solid transparent",
            }}
          >
            <InstantPhoto img={image} />
          </div>
        ))}
      </Carousel>

      <div id="portraits" className="img-block">
        <img src={require("../assets/paintings/drip.PNG")} draggable="false" alt=""/>
        <div className="img-block-title">
          <h1>Stunning Portraits</h1>
          <p>Vivid acrylic portraits depicted on large canvases,
            while incorporating an incredibly depth range of mediums.
          </p>
          <button className="text-button">View gallery</button>
        </div>
        <img src={require("../assets/paintings/bubbles.PNG")} draggable="false" alt=""/>
      </div>
    </div>
  )
};
