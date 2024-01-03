import { FC, useEffect, useMemo, useState } from "react";
import { styled } from "styled-components";
import Color from "./component/color/Color";
import { colorCodes, colors, numbers } from "../utils/colors";
import ArrowButton from "./component/utils/ArrowButton";
import Circle from "./component/circle/Circle";
import { useColorMutators, useColorState } from "../../grobalstate/colorState";
import Selection from "./component/selection/Selection";

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
    bottom: 0vw;
    margin: 1vw 1vw 0.5vw 1vw;
`;

const ArrowButtonContainer = styled.div`
    width: 46vw;
    position: fixed;
    padding: 0 1vw;
    bottom: 25vw;
    display: grid;
`;

const ColorCard: FC<Props> = ({ position }) => {
    const [color, setColor] = useState<string>(colors[0]);
    const [number, setNumber] = useState<string>(numbers[0]);

    const { ColorLeft, ColorRight } = useColorState();
    const { setLeftColorState, setRightColorState } = useColorMutators(); 

    const direction = position === "right" ? true : false;

    useEffect(() => {
        if (direction) {
            setColor(ColorLeft.color);
            setNumber(ColorLeft.number);
        } else {
            setColor(ColorRight.color);
            setNumber(ColorRight.number);
        }
    }
    , [ColorLeft, ColorRight, direction]);

    const setColorId = ({ color, number }: { color: string; number: string }) => {
        setColor(color);
        setNumber(number);

        const colorIndex = colors.indexOf(color);
        const numberIndex = numbers.indexOf(number);
        const colorId = colorIndex * numbers.length + numberIndex;
        const colorCode = colorCodes[colorId];
        const colorObj = { color, number, colorCode };
        if (direction) {
            setLeftColorState(colorObj);
        } else {
            setRightColorState(colorObj);
        }
    };

    const memoizedColor = useMemo(() => <Color color={color} number={number} direction={direction} />, [color, number,direction]);

    const memoizedArrowButton = useMemo(
        () => <ArrowButton color={color} number={number} setColorId={setColorId} />,
        [color, number]
    );

    return (
        <ColorCardContainer>
            <Circle direction={direction}></Circle>
            <Selection direction={direction}></Selection>
            <ArrowButtonContainer>{memoizedArrowButton}</ArrowButtonContainer>
            <ColorContainer>{memoizedColor}</ColorContainer>
        </ColorCardContainer>
    );
};

export default ColorCard;
