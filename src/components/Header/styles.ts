import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: HD;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--black);

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 700;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const MenuPlay = styled(MenuItemLink)`
  color: var(--green);

  &:hover {
    color: var(--white);
  }
`;

export const MenuHistory = styled(MenuItemLink)`
  color: var(--blue);

  &:hover {
    color: var(--white);
  }
`;

export const MenuRestart = styled(MenuItemLink)`
  color: var(--yellow);

  &:hover {
    color: var(--white);
  }
`;
