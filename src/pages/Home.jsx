import React from 'react';
import Hero from '../components/Hero';
import TopRec from '../components/TopRec';
import Slider from '../components/Slider';
import Login from './Login';

const Home = () => {
    return (
        <div className=' bg-white'>
            <Hero></Hero>
            {/* popular recipi */}
            <div className=" w-[90vw] mx-auto ">
                <h1 className=' text-black text-3xl font-[500]'>Top Recipes</h1>
                <Slider></Slider>
            </div>
            {/* all recipe */}
            <div className=" w-[90vw] mx-auto ">
                <h1 className=' text-black text-3xl font-[500]'>All Recipes</h1>
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <TopRec></TopRec>
                    <TopRec></TopRec>
                    <TopRec></TopRec>
                    <TopRec></TopRec>
                    <TopRec></TopRec>
                    <TopRec></TopRec>
                    <TopRec></TopRec>
                    <TopRec></TopRec>
                    <TopRec></TopRec>
                    <TopRec></TopRec>
                </div>
                <div className=" flex justify-center">
                    <button className='btn bg-[#ff0005] border-0 rounded-none'>View more</button>
                </div>
            </div>
            <Login></Login>
        </div>
    );
};

export default Home;