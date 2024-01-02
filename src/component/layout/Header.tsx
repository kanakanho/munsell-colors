import { FC } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    box-sizing: border-box;
`;

const Header: FC = () => {
    return (
        <HeaderContainer>
            <div>Logo</div>
            <div>Menu</div>
        </HeaderContainer>
    );
};

export default Header;