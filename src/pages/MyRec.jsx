import React from 'react';
import { useLoaderData } from 'react-router';
import TopRec from '../components/TopRec';

const MyRec = () => {
    const posts = useLoaderData();
    return (
        <div className='className=" w-[90vw] mx-auto p-5 md:py-16'>
            <div className="w-full text-center"><h1 className=' mb-10 text-5xl font-bold text-black/70'>My Recipes</h1></div>
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

export default MyRec;