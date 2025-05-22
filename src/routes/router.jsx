import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddRec from '../pages/AddRec';
import MyRev from '../pages/MyRec';
import MyRec from '../pages/MyRec';
import Details from '../pages/Details';
import MyDetail from '../pages/MyDetail';
import EditRec from '../pages/EditRec';

const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <ErrorPage></ErrorPage>,
        Component: Root,
        children : [
            {
                index : true,
                path : "/",
                loader : () => fetch("http://localhost:3000/recipes"),
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
                path : "/editrecipe/:id",
                loader : ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
                element : <EditRec></EditRec>
            },
            {
                path : "/addrecipe",
                element : <AddRec></AddRec>
            },
            {
                path : "/myrecipes",
                loader : () => fetch("http://localhost:3000/recipes"),
                element : <MyRec></MyRec>
            },
            {
                path : "/details/:id",
                loader : ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
                element : <Details></Details>
            },
            {
                path : "/mydetail/:id",
                loader : ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
                element : <MyDetail></MyDetail>
            }

        ]
    }
]);      

export default router;