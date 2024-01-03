import { FC } from "react";
import { useSelectState } from "../../../../grobalstate/selectState";
import SelectCard from "./utils/SelectCard";
import { styled } from "styled-components";

type Props = {
    direction: boolean;
};

const SelectLeftContainer = styled.div`
    position: fixed;
    top: 7.5vw;
    left: 18.5vw;
`;

const SelectRightContainer = styled.div`
    position: fixed;
    top: 7.5vw;
    left: 66.5vw;
`;

const Select: FC<Props> = ({ direction }) => {
    const { selectLeft, selectRight } = useSelectState();
    console.log(selectLeft, selectRight);
    if (direction) {
        return (
            <SelectRightContainer>
                <SelectCard color={selectRight.color} number={selectRight.number} colorCode={selectRight.colorCode} />
            </SelectRightContainer>
        );
    } else {
        return (
            <SelectLeftContainer>
                <SelectCard color={selectLeft.color} number={selectLeft.number} colorCode={selectLeft.colorCode} />
            </SelectLeftContainer>
        );
    }
};

export default Select;
