import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";


const AppLayout = () => {
    return (
        <div>
           <Header />
           <Outlet />
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Home />
            },
    
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
    },
    {
        path:"/restaurant/:resId",
        element:<Menu />
    },
],
},
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)