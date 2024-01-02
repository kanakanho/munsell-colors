import { FC } from "react";
import { styled } from "styled-components";
import Color from "./component/color/Color";
import { colors, numbers } from "../utils/ColorList";

const ColorScrollContainer = styled.div`
    width: 48vw;
    overflow: auto;
`;

const ColorContainer = styled.div`
    margin: 1vw;
`;

const ColorScroll: FC = () => {
    return (
        <ColorScrollContainer>
            {[...colors, ...colors].map((color, index) => {
                return (
                    <div key={index}>
                        {numbers.map((number, index) => {
                            return (
                                <ColorContainer key={index}>
                                    <Color key={index} color={color} number={number} direction={true} />
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
