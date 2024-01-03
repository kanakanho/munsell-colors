import { FC } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { useColorState } from "../../grobalstate/colorState";

type color = {
    color: string;
};

const HeaderContainer = styled.div<color>`
    background-color: #${(props) => props.color};
    position: fixed;
    height: 100vh;
    width: max(4vw);
`;

const TextContainer = styled.div<color>`
    display: flex;
    justify-content: flex-end;
    color: #${(props) => props.color};
    font-size: 1.5rem;
    transform: rotate(-90deg) translateX(-4vh);
    white-space: nowrap;
`;

const GithubLink = styled.a<color>`
    width: 2.5vw;
    height: 2.5vw;
    position: fixed;
    bottom: 2vw;
    left: 0.8vw;
    color: #000;
    font-size: 1.5rem;
    text-decoration: none;
    background-color: #${(props) => props.color};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header: FC = () => {
    const { colorRight,colorLeft } = useColorState();
    return (
        <HeaderContainer color={colorRight.colorCode}>
            <TextContainer color={colorLeft.colorCode}>Munsell-Color</TextContainer>
            <GithubLink color={colorLeft.colorCode} href="https://github.com/kanakanho" target="_blank">
                <FaGithub />
            </GithubLink>
        </HeaderContainer>
    );
};

export default Header;
