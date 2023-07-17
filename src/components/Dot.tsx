import styled from "styled-components";

interface Props {
  $active: boolean;
}
const Dot = styled.div<Props>`
  position: relative;
  background: #f0f0f0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    background: #111;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    inset: 0;
    margin: auto;
    pointer-events: none;
    opacity: ${(props) => (props.$active ? 1 : 0)};
    transition: opacity 300ms ease-in;
  }
`;

export default Dot;
