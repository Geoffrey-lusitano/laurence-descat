import { useEffect } from "react";
import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut = 
    autoPlay &&
    setTimeout(() =>{
      goToNext();
    },4500)
  })

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };
  return (
    <div className="slider" onMouseEnter={() => { setAutoPlay(false);}} onMouseLeave={() => {setAutoPlay(true);}}>
      <div className="left__arrow" onClick={goToPrevious}>
      ⟪
      </div>
      <div className="right__arrow" onClick={goToNext}>
      ⟫
      </div>
      <div style={slideStyles} className="slide">
        
      </div>
      {/* <div className="dots">
          {slides.map((slide, slideIndex) => (
            <div
              className="dot"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ♦
            </div>
          ))}
        </div> */}
    </div>
  );
};

export default ImageSlider;
