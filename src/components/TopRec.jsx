import React from 'react';

const TopRec = () => {
    return (
        <div className="card bg-white w-[100%] shadow-sm rounded-none">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className=" btn bg-[#ff0005] border-0 rounded-none">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TopRec;