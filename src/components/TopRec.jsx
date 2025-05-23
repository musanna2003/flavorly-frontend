import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { FaRegClock } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MyContext } from '../../public/MyContext';

const TopRec = ({post}) => {

    const navigate = useNavigate();
     const {user} = useContext(MyContext);

    
    const handleDetails = (_id,email) => {
        if (user.email === email){
            navigate(`/mydetail/${_id}`);
        }
        else{
            navigate(`/details/${_id}`);
        }
        
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
                <div className="flex justify-between">
                    <p className='flex items-center gap-1.5'><FaRegClock />{post.time}Minutes</p>
                    <p className='flex items-center gap-1.5'><FaUtensils />{post.Cuisine_Type}</p>
                </div>
                <h2 className="card-title">{post.title}</h2>
                
                <p><strong>Ingredients:</strong> {post.ingredients}</p>
                <div className="card-actions justify-end">
                    <button className="flex py-3 items-center gap-2 text-black/50" onClick={()=>handleDetails(post._id,post.email)}>View Recipe <FaArrowRight className="text-red-500"  /></button>
                </div>
            </div>
        </div>
    );
};

export default TopRec;