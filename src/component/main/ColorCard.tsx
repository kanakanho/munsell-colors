import { FC, useState } from "react";
import { styled } from "styled-components";
import Color from "./component/color/Color";
import { colors, numbers } from "../utils/ColorList";
import ArrowButton from "./component/utils/ArrowButton";

const ColorCardContainer = styled.div`
    position: fixed;
    width: 48vw;
`;

const ColorContainer = styled.div`
    width: 46vw;
    position: fixed;
    bottom: 5vw;
    margin: 1vw;
`;

const ArrowButtonContainer = styled.div`
    width: 46vw;
    position: fixed;
    bottom: 1.2vw;
    left: 5vw;
`;

const ColorCard: FC = () => {
    const [color, setColor] = useState<string>(colors[0]);
    const [number, setNumber] = useState<string>(numbers[0]);

    const setColorId = ({ color, number }: { color: string; number: string }) => {
        setColor(color);
        setNumber(number);
    }

    return (
        <ColorCardContainer>
            <ColorContainer>
                <Color color={color} number={number} direction={false} />
            </ColorContainer>
            <ArrowButtonContainer>
                <ArrowButton color={color} number={number} setColorId={setColorId}/>
            </ArrowButtonContainer>
        </ColorCardContainer>
    );
};

export default ColorCard;
