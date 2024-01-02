import { FC } from "react";
import Header from "./Header";
import ColorCard from "../main/ColorCard";
import ColorScroll from "../main/ColorScroll";

const Layout: FC = () => {
    return (
        <>
            <Header />
            <main>
                <ColorCard />
                <ColorScroll />
            </main>
        </>
    );
};

export default Layout;
