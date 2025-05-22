import React from 'react';
import Hero from '../components/Hero';
import TopRec from '../components/TopRec';
import Slider from '../components/Slider';
import Login from './Login';
import { useLoaderData } from 'react-router';

const Home = () => {

    const posts = useLoaderData();
    return (
        <div className=' bg-white'>
            <Hero></Hero>
            {/* popular recipi */}
            {/* <div className=" w-[90vw] mx-auto ">
                <h1 className=' text-black text-3xl font-[500]'>Top Recipes</h1>
                <Slider></Slider>
            </div> */}
            {/* all recipe */}
            <div id='allrecipes' className=" w-[90vw] mx-auto ">
                <h1 className=' text-black text-3xl font-[500]'>All Recipes</h1>
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        posts.map((post) => (
                            <TopRec key={post._id} post={post} />
                        ))
                    }
                                        
                </div>
                <div className=" flex justify-center">
                    <button className='btn bg-[#ff0005] border-0 rounded-none'>View more</button>
                </div>
            </div>
        </div>
    );
};

export default Home;