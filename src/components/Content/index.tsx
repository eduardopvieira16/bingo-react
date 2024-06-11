import { ReactNode } from "react";

import { Container } from "./styles";

interface ContentProps {
  children: ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <Container>
      <h2>Componente Content</h2>
      {children}
    </Container>
  );
};

export default Content;
