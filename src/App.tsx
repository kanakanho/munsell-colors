import { FC } from "react";
import Layout from "./component/layout/Layout";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

const App: FC = () => {
    return (
        <RecoilRoot>
            <Layout />
        </RecoilRoot>
    );
};

export default App;
