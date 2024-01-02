import { FC } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: #000;
    position: fixed;
    height: 100vh;
    width: max(4vw);
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    color: #fff;
    font-size: 1.5rem;
    transform: rotate(-90deg) translateX(-4vh);
    white-space: nowrap;
`;

const Text = styled.p``;

const GithubLink = styled.a`
    width: 2.5vw;
    height: 2.5vw;
    position: fixed;
    bottom: 2vw;
    left: 0.8vw;
    color: #fff;
    text-decoration: none;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 1.8vw;
    height: 1.8vw;
`;

const Header: FC = () => {
    return (
        <HeaderContainer>
            <TextContainer>
                <Text>Munsell-Color</Text>
            </TextContainer>
            <GithubLink href="https://github.com/kanakanho" target="_blank">
                <Image src="src/assets/github.svg" alt="github" />
            </GithubLink>
        </HeaderContainer>
    );
};

export default Header;
