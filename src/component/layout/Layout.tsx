import { FC } from "react";
import Header from "./Header";
import ColorCard from "../main/ColorCard";
import ColorScroll from "../main/ColorScroll";
import { styled } from "styled-components";

const MainContainer = styled.main`
    margin-left: max(4vw);
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const CardContainer = styled.div`
    width: 48vw;
`;

const ColorScrollContainer = styled.div`
    width: 48vw;
`;

const Layout: FC = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <CardContainer>
                    <ColorCard />
                </CardContainer>
                <ColorScrollContainer>
                    <ColorScroll />
                </ColorScrollContainer>
            </MainContainer>
        </>
    );
};

export default Layout;
