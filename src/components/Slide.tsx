import styled from "styled-components";

interface Props {
  $active: boolean;
}

const Slide = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 300ms ease-in;
`;

export default Slide;
