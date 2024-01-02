import { FC } from "react";
import { styled } from "styled-components";
import Color from "./utils/Color";

const ColorScrollContainer = styled.div`
    width: 48vw;
    overflow: auto;
`;

const ColorContainer = styled.div`
    margin: 1vw;
`;

const numbers = ["2.5", "5", "7.5", "10"];
const colors = ["R", "YR", "Y", "GY", "G", "BG", "B", "PB", "P", "RP"];

const ColorScroll: FC = () => {
    return (
        <ColorScrollContainer>
            {[...colors,...colors].map((color, index) => {
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
