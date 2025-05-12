import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const CardDrawnNumber = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 1.5rem;
  }
`;

export const InputDrawn = styled.span`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--black);
  border: 2px solid var(--black);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    width: 60%;
    font-size: 2rem;
  }
`;

export const ButtonDrawnNumber = styled.button`
  width: 50%;
  padding: 1rem;
  background: var(--white);
  color: var(--green);
  border: 2px solid var(--green);
  border-radius: 12px;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--green);
    color: var(--white);
  }

  @media (max-width: 768px) {
    width: 60%;
    font-size: 1rem;
  }
`;
