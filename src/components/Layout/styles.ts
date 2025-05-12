import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "HD"
    "CT";
  height: 100vh;
  width: 100vw;

  @media (min-width: 769px) {
    grid-template-columns: 150px 1fr;
    grid-template-areas:
      "HD HD"
      "CT CT";
  }
`;
