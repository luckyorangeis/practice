import React from "react";

import routes from "./router";
import { useRoutes } from "react-router-dom";
import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
const App: React.FC = () => {
    const route = useRoutes(routes);

    return <ConfigProvider locale={locale}>{route}</ConfigProvider>;
};

export default App;
