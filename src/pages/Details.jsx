import React from 'react';
import { useLoaderData } from 'react-router';
import { FaRegComment } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Details = () => {
    const post = useLoaderData();
    return (
        <div className=' bg-white px-[3vw] md:py-16 flex items-center '> 
            <div className="card bg-white max-w-xl aspect-[7/10] mx-auto text-black/80 shadow-sm rounded-none">
           
            <figure className=' h-[50%] '>
                <img
                    src={post.photo_url}
                    alt={post.title}
                    className="w-full object-cover"
                />
            </figure>
            <div className="card-body min-h-[50%]">
                <h2 className="card-title text-3xl">{post.title}</h2>
                <p><strong>Cuisine:</strong> {post.Cuisine_Type}</p>
                <p><strong>Ingredients:</strong> {post.ingredients}</p>
                <p><strong>Ingredients:</strong> {post.instructions}</p>
                <p className=' text-black/50'>0 people like the recipe.</p>
                <div className="border-t-1 w-full border-black/40"></div>
                <div className="card-actions justify-end">
                    <p className='btn btn-ghost' ><FaRegHeart size={18} /></p>
                    <p className='btn btn-ghost' ><FaRegComment size={18} /></p>
                    <p className='btn btn-ghost' ><FaRegBookmark size={18} /></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Details;