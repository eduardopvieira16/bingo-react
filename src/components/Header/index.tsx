import {
    Container,
    HeaderContainer,
    MenuContainer,
    MenuHistory,
    MenuPlay,
    MenuRestart,
    Title,
} from "./styles";

const Header = () => {
    return (
        <Container>
            <HeaderContainer>
                <Title>Bingo</Title>
            </HeaderContainer>

            <MenuContainer>
                <MenuPlay>Jogar</MenuPlay>
                <MenuHistory>Histórico</MenuHistory>
                <MenuRestart>Recomeçar</MenuRestart>
            </MenuContainer>
        </Container>
    );
};

export default Header;
