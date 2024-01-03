import { FC } from "react";
import { useSelectMutators } from "../../../../../grobalstate/selectState";
import { useColorState } from "../../../../../grobalstate/colorState";

type Props = {
    direction: boolean;
    colorCode: string;
    children: React.ReactNode;
};

const ColorCopy: FC<Props> = ({ direction, colorCode, children }) => {
    const { setRightSelectState, setLeftSelectState } = useSelectMutators();
    const { colorLeft, colorRight } = useColorState();
    const ColorCopy = () => {
        navigator.clipboard.writeText(colorCode);
        if (direction) {
            const colorObj = { ...colorRight, colorCode };
            console.log("right" ,colorObj);
            setRightSelectState(colorObj);
        } else {
            const colorObj = { ...colorLeft, colorCode };
            console.log("left" ,colorObj);
            setLeftSelectState(colorObj);
        }
    };

    return <div onClick={() => ColorCopy()}>{children}</div>;
};

export default ColorCopy;
