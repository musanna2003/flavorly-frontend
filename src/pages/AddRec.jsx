import React from 'react';
import bg from '../assets/chinese-food-8119421_1920.jpg'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';


const AddRec = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="card mx-auto w-full max-w-lg md:max-w-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 rounded-xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-black/90">Share Your Recipe</h1>
                        <fieldset className="space-y-2 text-left flex flex-col ">
                           
                            <label className="label text-white">Photo URL</label>

                            <div className="relative">
                                <span className="absolute left-3 top-[40%] white/60 text-2xl">
                                <MdOutlineAddPhotoAlternate />
                                </span>
                                <input
                                type="text"
                                className="input input-error w-full h-32 pl-12 bg-white/20 text-black/80 placeholder-white/60"
                                placeholder="Paste image URL here"
                                />
                            </div>
                            
                            <label className="label text-white">Title</label>
                            <input
                                type="text"
                                className="input input-error w-full bg-white/20 text-black placeholder-white/60"
                                placeholder="Title"
                            />
                            <label className="label text-white">Cuisine Type</label>
                            <select className="select select-error w-full bg-white/20 text-text-white/60 placeholder-white/60">
                                <option disabled selected >Select cuisine</option>
                                <option>Italian</option>
                                <option>Mexican</option>
                                <option>Indian</option>
                                <option>Chinese</option>
                                <option>Others</option>
                            </select>
                            <label className="label text-white">Ingredients</label>
                            <textarea 
                                type="text"
                                className="input input-error p-2 min-h-24 w-full bg-white/20 text-black placeholder-white/60"
                                placeholder="Ingredients"
                            />
                            <label className="label text-white">Instructions.</label>
                            <textarea 
                                type="text"
                                className="input input-error p-2 min-h-24 w-full bg-white/20 text-black placeholder-white/60"
                                placeholder="Instructions."
                            />

                            {/* check box */}
                            
                            <label className="label text-white">Categories</label>
                            
                            <label className="cursor-pointer label gap-2 px-8">
                                <input type="checkbox" className="checkbox checkbox-error border-[#ff0005] checked:bg-[#ff0005] text-white" />
                                <span className="label-text text-white">Breakfast</span>
                            </label>

                            <label className="cursor-pointer label gap-2 px-8">
                                <input type="checkbox" className="checkbox checkbox-error border-[#ff0005] checked:bg-[#ff0005] text-white" />
                                <span className="label-text text-white">Lunch</span>
                            </label>

                            <label className="cursor-pointer label gap-2 px-8">
                                <input type="checkbox" className="checkbox checkbox-error border-[#ff0005] checked:bg-[#ff0005] text-white" />
                                <span className="label-text text-white">Dinner</span>
                            </label>

                            <label className="cursor-pointer label gap-2 px-8">
                                <input type="checkbox" className="checkbox checkbox-error border-[#ff0005] checked:bg-[#ff0005] text-white" />
                                <span className="label-text text-white">Dessert</span>
                            </label>

                            <label className="cursor-pointer label gap-2 px-8">
                                <input type="checkbox" className="checkbox checkbox-error border-[#ff0005] checked:bg-[#ff0005] text-white" />
                                <span className="label-text text-white">Vegan</span>
                            </label>
                            <label className="label text-white">Preparation Time</label>
                            <input
                                type="number"
                                className="input input-error w-full bg-white/20 text-black placeholder-white/60"
                                placeholder="Preparation Time"
                            />
                            

                            <button className="btn bg-[#ff0005] w-full border-0 mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRec;