import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaRegComment } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MyContext } from '../../public/MyContext';
import { toast } from 'react-toastify';

const Details = () => {
    const { user } = useContext(MyContext);
    const post = useLoaderData();
    const [liked, setLiked] =useState(false);
    const [count, setCount] =useState(post.likes)
    const userEmail = user.email

    useEffect(() => {
        if (Array.isArray(post.likedBy)) {
            const hasLiked = post.likedBy.includes(userEmail);
            setLiked(hasLiked);
        }
    }, [post, userEmail]);

   
    const handleLike = (id) => {

        if(post.email === user.email){
            return toast.error("You can't like your own post", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
        }

        fetch(`https://phassignment102.vercel.app/recipes/like/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userEmail }),
        })
        .then(res => res.json())
        .then(data => {
            setLiked(data.liked)
            data.liked?setCount(count+1):setCount(count-1);
        });
    }

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
                    <p><strong>Instructions:</strong> {post.instructions}</p>
                    <p className=' text-black/50'>{count} people like the recipe.</p>
                    <div className="border-t-1 w-full border-black/40"></div>
                    <div className="card-actions justify-end">
                        <p
                            className="btn btn-ghost"
                            onClick={() => handleLike(post._id)}
                        >
                            {(liked) ? <FaHeart size={24} className="text-red-500" /> : <FaRegHeart size={23} />}
                        </p>
                        <p className='btn btn-ghost'><FaRegComment size={24} /></p>
                        <p className='btn btn-ghost'><FaRegBookmark size={24} /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
