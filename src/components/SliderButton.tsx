import styled, { css } from "styled-components";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

interface ButtonProps {
  $direction: "next" | "prev";
}
const Button = styled.button<ButtonProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(241, 241, 241, 0.4);
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  top: 50%;
  ${(props) =>
    props.$direction === "next"
      ? css`
          right: 20px;
        `
      : css`
          left: 20px;
        `}
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 25px;
  height: 25px;
  pointer-events: none;
`;

interface Props {
  action: () => void;
  direction: "next" | "prev";
}

function SliderButton({ action, direction }: Props) {
  const imageSrc = direction === "next" ? rightArrow : leftArrow;
  return (
    <Button onClick={action} className={direction} $direction={direction}>
      <Image src={imageSrc} alt="right arrow" />
    </Button>
  );
}

export default SliderButton;
