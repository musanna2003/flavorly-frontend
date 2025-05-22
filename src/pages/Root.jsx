import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className="">
            <div className='min-h-screen bg-white flex flex-col justify-between'>
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
                
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;