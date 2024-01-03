import { FC } from "react";
import { styled } from "styled-components";
import { colors, numbers, colorCodes } from "./../../../utils/colors";
import { useColorMutators, useColorState } from "../../../../grobalstate/colorState";
import { colorType } from "../../../../grobalstate/utills/colorType";

type Props = {
    direction: boolean;
};

type position = {
    x: number;
    y: number;
};

const CircleContainer = styled.div`
    position: fixed;
    top: 1vw;
    left: 4vw;
    border-radius: 50%;
    background-color: aqua;
`;

const ImgContainer = styled.div<Props>`
    transform: ${(props) => (props.direction ? "translate(70vw, 14vw)" : "translate(22vw, 14vw)")};
`;

const ColorItem = styled.div<position>`
    position: absolute;
    top: ${(props) => props.y}vw;
    left: ${(props) => props.x}vw;
`;

const Circle: FC<Props> = ({ direction }) => {
    const { setLeftColorState, setRightColorState } = useColorMutators();
    const { ColorLeft, ColorRight } = useColorState();

    const vw = window.innerWidth / 100;
    const imgNum = colors.length * numbers.length;
    const deg = 360 / imgNum;
    const red = (deg * Math.PI) / 180;
    const radius = vw ;
    const positionYs: number[] = [];
    const positionXs: number[] = [];
    for (let i = 0; i < imgNum; i++) {
        const x = radius * Math.cos(red * i);
        const y = radius * Math.sin(red * i);
        positionXs.push(x);
        positionYs.push(y);
    }

    let colorObj = {
        color: "R",
        number: "2.5",
        colorCode: "FF406C",
    };

    if (direction) {
        colorObj = ColorLeft;
    } else {
        colorObj = ColorRight;
    }

    const setColor = (newColorObj: colorType) => {
        if (direction) {
            setLeftColorState(newColorObj);
        } else {
            setRightColorState(newColorObj);
        }
    };

    return (
        <CircleContainer>
            <ImgContainer direction={direction}>
                {colors.map((color, colorIndex) =>
                    numbers.map((number, numberIndex) => {
                        const index = colorIndex * numbers.length + numberIndex;
                        if (colorCodes[index] === colorObj.colorCode) {
                            return (
                                <ColorItem x={positionXs[index]} y={positionYs[index]} key={index}>
                                    <svg width="25" height="25">
                                        <line x1="0" y1="0" x2="25" y2="25" stroke="#ddd" strokeWidth="5" />
                                        <line x1="0" y1="25" x2="25" y2="0" stroke="#ddd" strokeWidth="5" />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="#ddd"
                                            strokeWidth="4"
                                            fill={"#" + colorCodes[index]}
                                        />
                                    </svg>
                                </ColorItem>
                            );
                        } else {
                            return (
                                <ColorItem
                                    x={positionXs[index]}
                                    y={positionYs[index]}
                                    key={index}
                                    onClick={() =>
                                        setColor({ color: color, number: number, colorCode: colorCodes[index] })
                                    }
                                >
                                    <svg width="25" height="25">
                                        <circle cx="12" cy="12" r="10" strokeWidth="1" fill={"#" + colorCodes[index]} />
                                    </svg>
                                </ColorItem>
                            );
                        }
                    })
                )}
            </ImgContainer>
        </CircleContainer>
    );
};

export default Circle;
