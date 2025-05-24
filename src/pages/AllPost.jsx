import React from 'react';
import { useLoaderData } from 'react-router';
import TopRec from '../components/TopRec';

const AllPost = () => {
    const posts = useLoaderData();
    return (
        <div id='allrecipes' className=" w-[90vw] mx-auto py-5 md:py-10">
            <h1 className=' my-10 text-5xl font-bold text-black/70'>All Recipes</h1>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    posts.map((post) => (
                        <TopRec key={post._id} post={post} />
                    ))
                }
                                    
            </div>
        </div>
    );
};

export default AllPost;