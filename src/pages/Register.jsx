import React from 'react';
import bg from '../assets/chinese-food-8119421_1920.jpg'

const Register = () => {
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
                <div className="card w-full max-w-sm bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 rounded-xl">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Register Here..</h1>
                        <fieldset className="space-y-2 text-left">
                            <label className="label text-white">Name</label>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60"
                                placeholder="Name"
                            />
                            <label className="label text-white">Photo URL</label>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60"
                                placeholder="Photo URL"
                            />
                             <label className="label text-white">Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60"
                                placeholder="Email"
                            />
                            <label className="label text-white">Password</label>
                            <input
                                type="password"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60"
                                placeholder="Password"
                            />
                            <button className="btn bg-[#ff0005] w-full border-0 mt-4">Register</button>
                        </fieldset>
                        <div className='text-start'>
                            <p>
                               Already have an account?&nbsp;  
                                <a href='/login' className="link link-hover text-white/80 hover:underline font-[500]">
                                 Login here
                                </a>
                            </p>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;