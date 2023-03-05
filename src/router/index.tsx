// import { useRoutes } from "react-router-dom";
import { Home, LayoutPage } from "../pages";

const routes = [
    {
        path: "/",
        element: <LayoutPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
];
export default routes;
