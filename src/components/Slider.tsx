import { useReducer } from "react";
import styled from "styled-components";
import data from "../data";
import Slide from "./Slide";
import SliderButton from "./SliderButton";

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

interface Action {
  type: "next-slide" | "previous-slide";
}
const reducer =
  (limit: number) =>
  (state = 1, action: Action) => {
    switch (action.type) {
      case "next-slide":
        return state < limit ? state + 1 : 1;
      case "previous-slide":
        return state > 1 ? state - 1 : limit;
      default:
        return state;
    }
  };

function Slider() {
  const [slideIndex, dispatch] = useReducer(reducer(data.length), 1);

  const prevSlide = () => dispatch({ type: "previous-slide" });
  const nextSlide = () => dispatch({ type: "next-slide" });

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
