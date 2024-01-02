import { FC } from "react";
import { styled } from "styled-components";
import Color from "./utils/Color";

const ColorCardContainer = styled.div`
    position: fixed;
    width: 48vw;
`;

const ColorContainer = styled.div`
    /* テキスト以外左右反転 */
    /* transform: scaleX(-1); */
    width: 46vw;
    position: fixed;
    bottom: 0;
    margin: 1vw;
`;

const ColorCard: FC = () => {
    return (
        <ColorCardContainer>
            <ColorContainer>
                <Color color={"R"} number={"2.5"} direction={false} />
            </ColorContainer>
        </ColorCardContainer>
    );
};

export default ColorCard;
