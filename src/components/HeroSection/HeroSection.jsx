import { useState } from "react";
import "./HeroSection.css";
import prevIcon from "../../assets/images/icon-previous.svg";
import nextIcon from "../../assets/images/icon-next.svg";
import imgData from "../../data/images.json";
const HeroSection = () => {
  // 0,represents the index of the first image in the imgData array.
  const [index, setIndex] = useState(0);

  // hasNext is a boolean variable that checks if there is another image after the current image. It does this by comparing the current index (index) to the last index of the imgData array (imgData.length - 1).
  const hasNext = index < imgData.length - 1;
  let image = imgData[index];

  const handleSlide = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <section>
      <img
        src={image.src}
        alt={image.alt}
        key={image.id}
        className="img_container"
      />
      <div className="btn_container">
        <button className="slideshow_btn" onClick={handleSlide}>
          <img src={prevIcon} alt="prev-icon" />
        </button>
        <button className="slideshow_btn" onClick={handleSlide}>
          <img src={nextIcon} alt="next-icon" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
