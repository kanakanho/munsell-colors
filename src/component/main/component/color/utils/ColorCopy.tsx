import { FC } from "react";

type ColorCopyProps = {
    colorCode: string;
    children: React.ReactNode;
};

const ColorCopy: FC<ColorCopyProps> = ({ colorCode, children }) => {
    const ColorCopy = () => {
        navigator.clipboard.writeText(colorCode);
    };

    return <div onClick={() => ColorCopy()}>{children}</div>;
};

export default ColorCopy;
