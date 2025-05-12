import { HeaderContainer, Title, MenuContainer, MenuPlay, MenuHistory, MenuRestart } from "./styles";

const Header: React.FC = () => (
  <HeaderContainer>
    <Title>Bingo</Title>
    <MenuContainer>
      <MenuPlay>Jogar</MenuPlay>
      <MenuHistory>Histórico</MenuHistory>
      <MenuRestart>Recomeçar</MenuRestart>
    </MenuContainer>
  </HeaderContainer>
);

export default Header;
