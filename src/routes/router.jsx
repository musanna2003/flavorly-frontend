import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Login from '../pages/Login';

const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <ErrorPage></ErrorPage>,
        Component: Root,
        children : [
            {
                index : true,
                path : "/",
                // loader : () => fetch("/eventData.json"),
                Component : Home,

            },
            {
                path : "/login",
                element : <Login></Login>
            }

        ]
    }
]);      

export default router;