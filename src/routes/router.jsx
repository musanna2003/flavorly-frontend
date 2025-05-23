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
import ForgotPassword from '../pages/ForgotPassword';
import PrivetRoute from './PrivetRoute';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
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
                path : "login/forgotPassword",
                element : <ForgotPassword></ForgotPassword>
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
                element : <PrivetRoute><AddRec></AddRec></PrivetRoute>
            },
            {
                path : "/myrecipes",
                loader : () => fetch("http://localhost:3000/recipes"),
                element : <PrivetRoute><MyRec></MyRec></PrivetRoute>
            },
            {
                path : "/details/:id",
                loader : ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
                element : <PrivetRoute><Details></Details></PrivetRoute>
            },
            {
                path : "/mydetail/:id",
                loader : ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
                element : <PrivetRoute><MyDetail></MyDetail></PrivetRoute>
            }

        ]
    }
]);      

export default router;