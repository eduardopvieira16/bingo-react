import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 2rem;
    }
`;

export const CardDrawnNumber = styled.form`
    display: flex;
    width: 50%;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 90%;
        height: auto;
    }
`;

const buttonStyles = `
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 20px;
    transition: 0.15s;
    cursor: pointer;
`;

export const Button = styled.button`
    ${buttonStyles}
`;

export const ButtonDrawnNumber = styled(Button)`
    width: 50%;
    height: 12%;
    margin-bottom: 10rem;
    background: var(--white);
    color: var(--green);
    border: 0.18rem solid var(--green);
    margin-top: 20px;

    :hover {
        background: var(--green);
        color: var(--white);
        border: 0.18rem solid var(--green);
    }

    @media (max-width: 768px) {
        width: 60%;
        height: auto;
        margin-bottom: 2rem;
    }
`;

export const InputDrawn = styled.span`
    display: flex;
    flex: 1;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--black);
    border: 0.18rem solid var(--black);
    border-radius: 20px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        width: 60%;
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`;
