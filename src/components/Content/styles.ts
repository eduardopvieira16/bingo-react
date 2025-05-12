import styled from "styled-components";

export const Container = styled.main`
  grid-area: CT;
  color: var(--black);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: DELIMITER) {
    padding: 0.5rem;
  }
`;
