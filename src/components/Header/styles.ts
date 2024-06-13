import styled from "styled-components";

export const HeaderContainer = styled.header`
    grid-area: HD;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background-color: var(--black);

    @media (max-width: 768px) {
        padding: 1rem;
        flex-direction: column;
    }
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--white);

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: var(--red);
    background: var(--white);
    border: 1px solid var(--red);
    border-radius: 5px;
    transition: 0.15s;

    :hover {
        background: var(--red);
        color: var(--white);
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0.5rem;
    font-size: 0.8rem;
    font-weight: bold;
    transition: opacity 0.3s;
    cursor: pointer;
    color: var(--black);

    :hover {
        color: var(--white);
    }

    @media (max-width: 768px) {
        margin: 0.3rem 0;
    }
`;

export const MenuPlay = styled(MenuItemLink)`
    color: var(--green);

    :hover {
        color: var(--white);
    }
`;

export const MenuHistory = styled(MenuItemLink)`
    color: var(--blue);

    :hover {
        color: var(--white);
    }
`;

export const MenuRestart = styled(MenuItemLink)`
    color: var(--yellow);

    :hover {
        color: var(--white);
    }
`;
