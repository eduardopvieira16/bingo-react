import { useEffect, useState } from "react";
import {
    ButtonDrawnNumber,
    CardDrawnNumber,
    Container,
    InputDrawn,
} from "./styles";

const MAX_NUMBER = 75;
const DRAW_TIME_MS = 50000;

function Bingo() {
    const [drawnNumber, setDrawnNumber] = useState<number>(0);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const drawNumber = () => {
        if (drawnNumber === 0) {
            const newDrawnNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
            setDrawnNumber(newDrawnNumber);
        }
    };

    const handlePlay = () => {
        drawNumber();
        if (timeoutId) clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
            setDrawnNumber(0);
        }, DRAW_TIME_MS);
        setTimeoutId(newTimeoutId);
    };

    useEffect(() => {
        handlePlay();
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <Container>
            <CardDrawnNumber>
                <InputDrawn>{drawnNumber}</InputDrawn>
                <ButtonDrawnNumber onClick={handlePlay}>
                    Sortear
                </ButtonDrawnNumber>
            </CardDrawnNumber>
        </Container>
    );
}

export default Bingo;
