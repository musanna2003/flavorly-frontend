import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import swal from 'sweetalert'
import { toast } from 'react-toastify';

const MyDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();

    const handelDelete = (id) =>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                
                fetch(`http://localhost:3000/recipes/${id}`,{
                    method : 'DELETE'
                })
                    .then(res => res.json())
                    .then(data =>{
                        console.log(data)
                        if (data.deletedCount){
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
                            navigate(`/myrecipes`);
                        }
                    })
            } 
            // else {
            //     swal("Your imaginary file is safe!");
            // }
        });
    }

    const handelEdit = () =>{
        navigate(`/editrecipe`);
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
                <p><strong>Ingredients:</strong> {post.instructions}</p>
                <div className="border-t-1 w-full border-black/40"></div>
                <div className="card-actions justify-end">
                    <p onClick={handelEdit} className='btn btn-ghost' ><MdEdit size={18} /></p>
                    <p onClick={()=>handelDelete(post._id)} className='btn btn-ghost' ><MdDeleteOutline size={18} /></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyDetail;