import { useReducer } from "react";
import styled from "styled-components";
import data from "../data";
import Dot from "./Dot";
import Dots from "./Dots";
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

interface SlideTraverseAction {
  type: "next-slide" | "previous-slide";
}
interface SlideSetAction {
  type: "set-slide";
  payload: number;
}
type Action = SlideSetAction | SlideTraverseAction;
const reducer =
  (limit: number) =>
  (state = 1, action: Action) => {
    switch (action.type) {
      case "next-slide":
        return state < limit ? state + 1 : 1;
      case "previous-slide":
        return state > 1 ? state - 1 : limit;
      case "set-slide":
        return action.payload > 0 && action.payload <= limit
          ? action.payload
          : state;
      default:
        return state;
    }
  };

function Slider() {
  const [slideIndex, dispatch] = useReducer(reducer(data.length), 1);

  const prevSlide = () => dispatch({ type: "previous-slide" });
  const nextSlide = () => dispatch({ type: "next-slide" });
  const setSlide = (index: number) =>
    dispatch({ type: "set-slide", payload: index });

  return (
    <Container>
      {data.map((item, idx) => (
        <Slide key={item.id} $active={slideIndex === idx + 1}>
          <Image src={item.image} alt={item.description} />
        </Slide>
      ))}
      <SliderButton action={nextSlide} direction="next" />
      <SliderButton action={prevSlide} direction="prev" />
      <Dots>
        {data.map((item, idx) => (
          <Dot
            key={item.id}
            $active={slideIndex === idx + 1}
            onClick={() => setSlide(idx + 1)}
          />
        ))}
      </Dots>
    </Container>
  );
}

export default Slider;
