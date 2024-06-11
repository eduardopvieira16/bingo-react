import styled from "styled-components";

const buttonStyles = `
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 4px;
    transition: 0.15s;
    cursor: pointer;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 5rem;
    padding-right: 10rem;
`;

export const CardDrawnNumber = styled.form`
    display: flex;
    width: 50%;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: 100%;
    ${buttonStyles}
`;

export const ButtonDrawnNumber = styled(Button)`
    width: 40%;
    height: 12%;
    margin-bottom: 10rem;
    background: var(--white);
    color: var(--green);
    border: 0.18rem solid var(--green);

    :hover {
        background: var(--green);
        color: var(--white);
        border: 0.18rem solid var(--green);
    }
`;

export const ButtonClear = styled(Button)`
    width: 60%;
    height: 8%;
    background: var(--white);
    color: var(--red);
    border: 0.18rem solid var(--red);

    :hover {
        background: var(--red);
        color: var(--white);
        border: 0.18rem solid var(--red);
    }
`;

export const InputDrawn = styled.span`
    display: flex;
    flex: 1;
    width: 20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--black);
    border: 0.18rem solid var(--black);
    border-radius: 20px;
`;
