import React from "react";
import styled, { css } from "styled-components";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${(props) => props.color || "red"};

  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return <Circle color="blue" huge />;
}

export default App;
