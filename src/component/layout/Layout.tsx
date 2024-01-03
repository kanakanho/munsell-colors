import { FC } from "react";
import Header from "./Header";
import ColorCard from "../main/ColorCard";
import ColorScroll from "../main/ColorScroll";
import { styled } from "styled-components";
import LeftButton from "../button/LeftButton";
import RightButton from "../button/RightButton";
import { useModeState } from "../../grobalstate/modeState";

const ButtonContainer = styled.div`
    margin-left: max(4vw);
    line-height: 0;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const MainContainer = styled.main`
    margin-left: max(4vw);
    display: grid;
    grid-template-columns: 1fr 1fr;
    z-index: 1;
`;
const CardContainer = styled.div`
    width: 48vw;
`;

const ColorScrollContainer = styled.div`
    width: 48vw;
`;

const Layout: FC = () => {
    const mode = useModeState();
    return (
        <>
            <Header />
            <MainContainer>
                {mode.left === "card" ? (
                    <CardContainer>
                        <ColorCard position={"left"} />
                    </CardContainer>
                ) : (
                    <ColorScrollContainer>
                        <ColorScroll position={"left"} />
                    </ColorScrollContainer>
                )}
                {mode.right === "card" ? (
                    <CardContainer>
                        <ColorCard position={"right"} />
                    </CardContainer>
                ) : (
                    <ColorScrollContainer>
                        <ColorScroll position={"right"} />
                    </ColorScrollContainer>
                )}
            </MainContainer>
            <ButtonContainer>
                <LeftButton />
                <RightButton />
            </ButtonContainer>
        </>
    );
};

export default Layout;
