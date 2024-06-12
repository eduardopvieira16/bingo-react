import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 150px auto;
    grid-template-rows: 50px auto;
    grid-template-areas:
        "HD HD"
        "CT CT";

    height: 100%;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 100px auto;
        grid-template-rows: 50px auto;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        grid-template-rows: 50px auto;
        grid-template-areas:
            "HD"
            "CT";
    }
`;
