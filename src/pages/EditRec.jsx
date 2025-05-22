import React from 'react';
import bg from '../assets/chinese-food-8119421_1920.jpg'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { toast } from 'react-toastify';


const EditRec = () => {

    const handelPost = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // Convert everything to an object first
        const postData = Object.fromEntries(formData.entries());

        // Get all checked categories (checkboxes with same name)
        const categories = formData.getAll('categories');
        postData.categories = categories;

        console.log(postData); // categories will now be an array

        //send to db
        fetch('http://localhost:3000/recipes',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    console.log("done")
                    toast.success('Update successful!', {
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
            })
    };


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
                        <form onSubmit={handelPost} className="space-y-2 text-left flex flex-col ">
                           
                            <label className="label text-white">Photo URL</label>

                            <div className="relative">
                                <span className="absolute left-3 top-[40%] white/60 text-2xl">
                                <MdOutlineAddPhotoAlternate />
                                </span>
                                <input
                                type="text"
                                className="input input-error w-full h-32 pl-12 bg-white/20 text-black/80 placeholder-white/60"
                                placeholder="Paste image URL here"
                                name='photo_url'
                                />
                            </div>
                            
                            <label className="label text-white">Title</label>
                            <input
                                type="text"
                                className="input input-error w-full bg-white/20 text-black placeholder-white/60"
                                placeholder="Title"
                                name='title'
                            />
                            <label className="label text-white">Cuisine Type</label>
                            <select name='Cuisine_Type' className="select select-error w-full bg-white/20 text-white/60 placeholder-white/60">
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
                                name='ingredients'
                            />
                            <label className="label text-white">Instructions</label>
                            <textarea 
                                type="text"
                                className="input input-error p-2 min-h-24 w-full bg-white/20 text-black placeholder-white/60"
                                placeholder="Instructions."
                                name='instructions'
                            />

                            {/* check box */}
                            
                            <label className="label text-white">Categories</label>
                            
                            <label className="cursor-pointer label gap-2 px-8">
                                <input type="checkbox" name="categories" value="Breakfast" className="checkbox checkbox-error border-[#ff0005] checked:bg-[#ff0005] text-white" />
                                <span className="label-text text-white">Breakfast</span>
                            </label>

                            <label className="cursor-pointer label gap-2 px-8">
                                <input type="checkbox" name="categories" value="Lunch" className="checkbox checkbox-error border-[#ff0005] checked:bg-[#ff0005] text-white" />
                                <span className="label-text text-white">Lunch</span>
                            </label>

                            <label className="cursor-pointer label gap-2 px-8">
                                <input type="checkbox" name="categories" value="Dinner" className="checkbox checkbox-error border-[#ff0005] checked:bg-[#ff0005] text-white" />
                                <span className="label-text text-white">Dinner</span>
                            </label>

                            <label className="cursor-pointer label gap-2 px-8">
                                <input type="checkbox" name="categories" value="Dessert" className="checkbox checkbox-error border-[#ff0005] checked:bg-[#ff0005] text-white" />
                                <span className="label-text text-white">Dessert</span>
                            </label>

                            <label className="cursor-pointer label gap-2 px-8">
                                <input type="checkbox" name="categories" value="Vegan" className="checkbox checkbox-error border-[#ff0005] checked:bg-[#ff0005] text-white" />
                                <span className="label-text text-white">Vegan</span>
                            </label>


                            <label className="label text-white">Preparation Time</label>
                            <input
                                type="number"
                                className="input input-error w-full bg-white/20 text-black placeholder-white/60"
                                placeholder="Preparation Time"
                                name='time'
                            />
                            

                            <button className="btn bg-[#ff0005] w-full border-0 mt-4">Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditRec;