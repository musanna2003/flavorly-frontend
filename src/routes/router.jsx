import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddRec from '../pages/AddRec';
import MyRev from '../pages/MyRec';
import MyRec from '../pages/MyRec';

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
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/addrecipe",
                element : <AddRec></AddRec>
            },
            {
                path : "/myrecipes",
                element : <MyRec></MyRec>
            }

        ]
    }
]);      

export default router;