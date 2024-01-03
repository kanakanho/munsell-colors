import { FC } from "react";
import { styled } from "styled-components";
import Color from "./component/color/Color";
import { colors, numbers } from "../utils/colors";

type Props = {
    position: string;
};

const ColorScrollContainer = styled.div`
    width: 48vw;
    overflow: scroll;
    height: 100vh;
`;

const ColorContainer = styled.div`
    margin: 1vw;
`;

const ColorScroll: FC<Props> = ({ position }) => {
    const direction = position === "right" ? true : false;
    return (
        <ColorScrollContainer>
            {[...colors, ...colors].map((color, index) => {
                return (
                    <div key={index}>
                        {numbers.map((number, index) => {
                            return (
                                <ColorContainer key={index}>
                                    <Color key={index} color={color} number={number} direction={direction} />
                                </ColorContainer>
                            );
                        })}
                    </div>
                );
            })}
        </ColorScrollContainer>
    );
};

export default ColorScroll;
