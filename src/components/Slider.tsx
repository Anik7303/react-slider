import { useState } from "react";
import styled from "styled-components";
import data from "../data";
import SliderButton from "./SliderButton";
import Slide from "./Slide";

const Container = styled.section`
  max-width: 700px;
  height: 500px;
  margin: 10vh auto 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 700px) {
    & {
      margin: 5vh 10px 0;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const prevSlide = () =>
    slideIndex > 1 ? setSlideIndex((s) => s - 1) : setSlideIndex(data.length);
  const nextSlide = () =>
    slideIndex < data.length ? setSlideIndex((s) => s + 1) : setSlideIndex(1);

  return (
    <Container>
      {data.map((item, idx) => (
        <Slide key={item.id} $active={slideIndex === idx + 1}>
          <Image src={item.image} alt={item.description} />
        </Slide>
      ))}
      <SliderButton action={nextSlide} direction="next" />
      <SliderButton action={prevSlide} direction="prev" />
    </Container>
  );
}

export default Slider;
