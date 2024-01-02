import { FC, useEffect, useState } from "react";
import { styled } from "styled-components";
import ColorObject from "./ColorObject";

type Props = {
    color: string;
    number: string;
    direction: boolean;
};

type DirectionProps = {
    direction: boolean;
};

const ColorContainer = styled.div<DirectionProps>`
    transform: ${(props) => (props.direction ? "scaleX(1)" : "scaleX(-1)")};
    background-color: #f0f0f0;
    border-radius: 1vw;
    padding: 1vw;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
`;

const ColorText = styled.p<DirectionProps>`
    transform: ${(props) => (props.direction ? "scaleX(1) translate(-1vw, 1vw)" : "scaleX(-1) translate(0.5vw, 1vw)")}  ;
    display: flex;
    justify-content:${(props) => (props.direction ? "flex-end" : "flex-start")} ;
    font-weight: bold;
    line-height: 0;
`;

const Color: FC<Props> = ({ color, number, direction }) => {
    // src/colordata/${color}/${number}/${c}.json から読み込む
    const jsonFilePath = `src/colordata/${color}/${number}.json`;
    const [data, setData] = useState<Record<string, Record<string, object>>>({});
    const [colorName, setColorName] = useState<string>("");

    useEffect(() => {
        setColorName(number + color);
        fetch(jsonFilePath)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, [jsonFilePath, color, number]);

    return (
        <ColorContainer direction={direction}>
            <ColorText direction={direction}>{colorName}</ColorText>
            {Object.keys(data).map((key, index) => {
                return <ColorObject key={index} colorObject={data[key]} />;
            })}
        </ColorContainer>
    );
};

export default Color;
