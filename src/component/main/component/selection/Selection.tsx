import { FC } from "react";
import { useSelectState } from "../../../../grobalstate/selectState";

type Props = {
    direction: boolean;
};

const Selection: FC<Props> = ({ direction }) => {
    const { selectLeft, selectRight } = useSelectState();
    if (direction) {
        return <div>{selectLeft.colorCode}</div>;
    } else {
        return <div>{selectRight.colorCode}</div>;
    }
};

export default Selection;
