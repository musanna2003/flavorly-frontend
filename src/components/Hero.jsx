import React from 'react';
import bg from '../assets/chinese-food-8119421_1920.jpg'


const Hero = () => {
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
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;