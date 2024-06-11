import styled from "styled-components";

export const Container = styled.div`
  grid-area: HD;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 5rem;

  background-color: var(--black);
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;

  margin-top: 0.3rem;
  margin-bottom: 0.1rem;

  color: var(--white);
`;

export const Button = styled.button`
  width: 4%;
  padding: 0.1rem;

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
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const MenuItemLink = styled.a`
  display: flex;

  text-decoration: none;

  margin: 10px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  align-items: center;

  transition: opacity 0.3s;

  cursor: pointer;

  :hover {
    color: var(--white);
  }
`;

export const MenuPlay = styled(MenuItemLink)`
  transition: opacity 0.3s;

  color: var(--green);

  :hover {
    color: var(--white);
  }
`;

export const MenuHistory = styled(MenuItemLink)`
  transition: opacity 0.3s;

  color: var(--blue);

  :hover {
    color: var(--white);
  }
`;

export const MenuRestart = styled(MenuItemLink)`
  transition: opacity 0.3s;

  color: var(--yellow);

  :hover {
    color: var(--white);
  }
`;
