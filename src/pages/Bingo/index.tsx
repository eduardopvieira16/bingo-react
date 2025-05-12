import { useEffect, useState, useCallback } from "react";
import { Container, CardDrawnNumber, InputDrawn, ButtonDrawnNumber } from "./styles";

const MAX_NUMBER = 75;
const DRAW_TIME_MS = 50000;

const Bingo: React.FC = () => {
  const [drawnNumber, setDrawnNumber] = useState<number>(0);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const drawNumber = useCallback(() => {
    const newDrawnNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
    setDrawnNumber(newDrawnNumber);
  }, []);

  const handlePlay = useCallback(() => {
    drawNumber();
    if (timeoutId) clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      setDrawnNumber(0);
    }, DRAW_TIME_MS);
    setTimeoutId(newTimeoutId);
  }, [drawNumber, timeoutId]);

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <Container>
      <CardDrawnNumber>
        <InputDrawn>{drawnNumber}</InputDrawn>
        <ButtonDrawnNumber onClick={handlePlay}>Sortear</ButtonDrawnNumber>
      </CardDrawnNumber>
    </Container>
  );
};

export default Bingo;
