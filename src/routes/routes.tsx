import { createBrowserRouter } from "react-router-dom";

// pages
import Main from "../pages/main/Main";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    }
]) 