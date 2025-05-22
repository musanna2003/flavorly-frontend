import React from 'react';
import { useNavigate } from 'react-router';


const TopRec = ({post}) => {

    const navigate = useNavigate();

    
    const handleDetails = (_id) => {
        navigate(`/mydetail/${_id}`);
    };
    
    return (
        <div className="card bg-white w-[100%] text-black/80 shadow-sm rounded-none">
           
            <figure>
                <img
                    src={post.photo_url}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p><strong>Cuisine:</strong> {post.Cuisine_Type}</p>
                <p><strong>Ingredients:</strong> {post.ingredients}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#ff0005] border-0 rounded-none" onClick={()=>handleDetails(post._id)}>View Recipe</button>
                </div>
            </div>
        </div>
    );
};

export default TopRec;