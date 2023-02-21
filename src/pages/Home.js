import { React, useState } from 'react';
import "./Home.css"
import Carousel from 'react-simply-carousel';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  // function importAll(r) {
  //   return r.keys().map(r);
  // }
  
  const images = require.context('./', true, /\.JPG$/);
  console.log(images)

  return (
    <div>
      <div id="hero" class="img-block">
        <img src="/assets/artist2.jpg" draggable="false" alt=""/>
        <div class="img-block-title">
          <h1>Bye-Bye Pink Panther, Hello Pink Leopard!</h1>
          <p>An art piece designed for an exhibition at the Calgary Zoo,
            inspired by their "Destination Africa" exhibit.
          </p>
          <button class="text-button hidden">View available pieces</button>
        </div>
      </div>

      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
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
        {Array.from({ length: 10 }).map((item, index) => (
          <div
            style={{
              background: "yellow",
              width: 300,
              height: 300,
              border: "30px solid white",
              textAlign: "center",
              lineHeight: "240px",
              boxSizing: "border-box"
            }}
            key={index}
          >
            {index}
          </div>
        ))}
      </Carousel>

      <div id="portraits" class="img-block">
        <img src="../assets/drip.PNG" draggable="false" alt=""/>
        <div class="img-block-title">
          <h1>Stunning Portraits</h1>
          <p>Vivid acrylic portraits depicted on large canvases,
            while incorporating an incredibly depth range of mediums.
          </p>
          <button class="text-button">View gallery</button>
        </div>
        <img src="./assets/bubbles.PNG" draggable="false" alt=""/>
      </div>
    </div>
  )
};
