import { FC } from "react";
import { useSelectMutators } from "../../../../../grobalstate/selectState";
import { useColorState } from "../../../../../grobalstate/colorState";

type Props = {
    direction: boolean;
    colorCode: string;
    children: React.ReactNode;
}

const ColorCopy: FC<Props> = ({ direction, colorCode, children }) => {
    const { setRightSelectState, setLeftSelectState } = useSelectMutators();
    const { ColorLeft, ColorRight } = useColorState();
    const ColorCopy = () => {
        navigator.clipboard.writeText(colorCode);
        if (direction) {
            const colorObj = { ...ColorLeft, colorCode };
            console.log(colorObj);
            setLeftSelectState(colorObj);
        } else {
            const colorObj = { ...ColorRight, colorCode };
            console.log(colorObj);
            setRightSelectState(colorObj);
        }

    };

    return <div onClick={() => ColorCopy()}>{children}</div>;
};

export default ColorCopy;
