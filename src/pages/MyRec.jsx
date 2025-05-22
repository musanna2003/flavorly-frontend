import React from 'react';
import { useLoaderData } from 'react-router';
import TopRec from '../components/TopRec';

const MyRec = () => {
    const posts = useLoaderData();
    return (
        <div>
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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