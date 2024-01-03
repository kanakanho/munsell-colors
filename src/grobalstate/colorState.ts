import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { colors, numbers, colorCodes } from "../component/utils/colors";

export const colorState = atom({
    key: "colorState",
    default: {
        ColorLeft: {
            color: colors[0],
            number: numbers[0],
            colorCode: colorCodes[0],
        },
        ColorRight: {
            color: colors[0],
            number: numbers[0],
            colorCode: colorCodes[0],
        }
    },
    dangerouslyAllowMutability: true,
});

export const useColorState = () => {
    return useRecoilValue(colorState);
};

export const useColorMutators = () => {
    const setColorState = useSetRecoilState(colorState);

    const setRightColorState = useCallback(
        (rightColorObj: {
            color: string;
            number: string;
            colorCode: string;
        }) => {
            setColorState((prev) => ({
                ...prev,
                right: rightColorObj,
            }));
        },
        [setColorState]
    );

    const setLeftColorState = useCallback(
        (leftColorObj: {
            color: string;
            number: string;
            colorCode: string;
        }) => {
            setColorState((prev) => ({
                ...prev,
                left: leftColorObj,
            }));
        },
        [setColorState]
    );

    return {
        setRightColorState,
        setLeftColorState,
    };
};
