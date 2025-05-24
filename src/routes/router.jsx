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
import AllPost from '../pages/AllPost';
import Loading from '../pages/Loading';

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        Component: Root,
        children : [
            {
                index : true,
                path : "/",
                loader : () => fetch("https://phassignment102.vercel.app/recipes/sort"),
                Component : Home,

            },
            {
                path : "/allrecipes",
                loader : () => fetch("https://phassignment102.vercel.app/recipes"),
                element : <AllPost></AllPost>

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
                loader : ({params}) => fetch(`https://phassignment102.vercel.app/recipes/${params.id}`),
                element : <PrivetRoute><EditRec></EditRec></PrivetRoute>
            },
            {
                path : "/addrecipe",
                element : <PrivetRoute><AddRec></AddRec></PrivetRoute>
            },
            {
                path: "/myrecipes/email/:email",
                loader: ({ params }) => fetch(`https://phassignment102.vercel.app/recipes/email/${params.email}`),
                element: <PrivetRoute><MyRec /></PrivetRoute>
            },
            {
                path : "/details/:id",
                loader : ({params}) => fetch(`https://phassignment102.vercel.app/recipes/${params.id}`),
                element : <PrivetRoute><Details></Details></PrivetRoute>
            },
            {
                path : "/mydetail/:id",
                loader : ({params}) => fetch(`https://phassignment102.vercel.app/recipes/${params.id}`),
                element : <PrivetRoute><MyDetail></MyDetail></PrivetRoute>
            }

        ]
    }
],
{
    hydrateFallback: <Loading />
  }
);      

export default router;