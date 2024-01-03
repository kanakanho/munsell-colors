import { FC, useMemo, useState } from "react";
import { styled } from "styled-components";
import Color from "./component/color/Color";
import { colors, numbers } from "../utils/colors";
import ArrowButton from "./component/utils/ArrowButton";

type Props = {
    position: string;
};

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
    padding: 0 1vw;
    bottom: 1.2vw;
    display: grid;
`;

const ColorCard: FC<Props> = ({ position }) => {
    const [color, setColor] = useState<string>(colors[0]);
    const [number, setNumber] = useState<string>(numbers[0]);

    const direction = position === "right" ? true : false;

    const setColorId = ({ color, number }: { color: string; number: string }) => {
        setColor(color);
        setNumber(number);
    };

    const memoizedColor = useMemo(() => <Color color={color} number={number} direction={direction} />, [color, number]);

    const memoizedArrowButton = useMemo(
        () => <ArrowButton color={color} number={number} setColorId={setColorId} />,
        [color, number]
    );

    return (
        <ColorCardContainer>
            <ColorContainer>{memoizedColor}</ColorContainer>
            <ArrowButtonContainer>{memoizedArrowButton}</ArrowButtonContainer>
        </ColorCardContainer>
    );
};

export default ColorCard;
