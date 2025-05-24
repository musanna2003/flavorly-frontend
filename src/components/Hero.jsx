import React from 'react';
import bg from '../assets/chinese-food-8119421_1920.jpg'
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {

    // const handleType = (count) => {
    //     console.log(count);
    // };

    // const handleDone = () => {
    //     console.log('Done after 5 loops!');
    // };

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
                <div className="max-w-5xl">
                    <h1 className="mb-5 md:text-8xl text-5xl font-[800] indie leading-normal">
                        <Typewriter
                            words={['WELCOME TO RECIPE COMMUNITY', 'DELICIOUS RECIPES AWAITING', 'DISCOVER FLAVORS FROM AROUND THE WORLD']}
                            loop={5}
                            cursor
                            cursorStyle="_"
                            typeSpeed={80}
                            deleteSpeed={80}
                            delaySpeed={3000}
                            
                        />
                    </h1>
                    
                </div>
            </div>
        </div>
    );
};

export default Hero;