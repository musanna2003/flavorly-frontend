import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";

const Sponce = () => {
    return (
        <div className="card w-[90%] mx-auto lg:card-side bg-white shadow-sm text-black/90 mt-8 md:mt-16">
            <figure className='w-full h-[60%] md:h-full md:w-[60%]'>
                <img
                src="https://images.pexels.com/photos/12737916/pexels-photo-12737916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Album" />
            </figure>
            <div className="card-body w-full md:w-[40%] space-y-4">
                <div className=" w-full text-right text-black/50"><h1>Sponsored</h1></div>
                <h2 className="card-title text-3xl">Special Dal Makhani </h2>
                <div className="flex justify-between">
                    <p className='flex items-center gap-1.5'><FaRegClock />30 Minutes</p>
                    <p className='flex items-center gap-1.5'><FaUtensils />Indian</p>
                </div>
                <p className='text-lg'>Rich, creamy, and slow-cooked to perfection, Special Dal Makhani blends whole black lentils and kidney beans with aromatic spices and a buttery finish — a true comfort dish from North India.</p>
                <div className="card-actions justify-end">
                <button className="btn bg-[#ff0005] border-0">View Recipe</button>
                </div>
            </div>
        </div>
    );
};

export default Sponce;