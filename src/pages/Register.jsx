import React, { useContext } from 'react';
import bg from '../assets/chinese-food-8119421_1920.jpg'
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';
import { MyContext } from '../../public/MyContext';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser } = useContext(MyContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const photo = e.target.photo.value.trim();
        const password = e.target.password.value;
    
        if (!name || !email || !password) {
            toast.error("Please fill in all required fields.");
            return;
        }
    
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;
    
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }
        if (!uppercasePattern.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }
        if (!lowercasePattern.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }
    
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
    
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    toast.success("Registration successful!");
                    navigate(location?.state || "/");
                }).catch((error) => {
                    console.error("Profile update error:", error);
                    toast.error("Failed to update profile.");
                });
            })
            .catch((error) => {
                console.error(error);
                if (error.code === "auth/email-already-in-use") {
                    toast.error("Email already in use. Try logging in.");
                } else if (error.code === "auth/invalid-email") {
                    toast.error("Invalid email address.");
                } else {
                    toast.error("Registration failed. " + error.message);
                }
            });
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
                <div className="card w-full max-w-sm bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 rounded-xl">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Register Here..</h1>
                        <form onSubmit={handleRegister} className="space-y-2 text-left">
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
                        </form>
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