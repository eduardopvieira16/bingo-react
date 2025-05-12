import { Grid } from "./styles";
import Header from "../Header";
import Content from "../Content";
import Bingo from "../../pages/Bingo";

const Layout: React.FC = () => (
    <Grid>
        <Header />
        <Content>
            <Bingo />
        </Content>
    </Grid>
);

export default Layout;
