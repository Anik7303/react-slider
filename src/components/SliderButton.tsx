import styled from "styled-components";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }

  &.next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }
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
    <Button onClick={action} className={direction}>
      <Image src={imageSrc} alt="right arrow" />
    </Button>
  );
}

export default SliderButton;
