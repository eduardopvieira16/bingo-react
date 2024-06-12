import styled from "styled-components";

export const Container = styled.div`
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

    @media (max-width: 480px) {
        padding: 0.5rem;
    }
`;
