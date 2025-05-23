import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { MyContext } from '../../public/MyContext';

const Nav = () => {
    const {user,signOutUser} = useContext(MyContext);
    const navigate = useNavigate();
    const handelLogout = () =>{
        signOutUser().then(() => {
            // Sign-out successful.
           
            navigate("login")
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });;
    }

    const navItem = <>
        
        <li><NavLink to="/">Home</NavLink></li>
        <li><a href="/#allrecipes">All Recipes</a></li>
        <li><NavLink to="/addrecipe">Add Recipe</NavLink></li>
        <li><NavLink to="/myrecipes">My Recipes</NavLink></li>
    </>

    return (
        <div className="navbar bg-[#ff0005] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {
                        navItem
                    }
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user?
                        <a href='/login' className="btn btn-ghost hover:bg-black/5 hover:border-0">
                            Login
                        </a>
                        :
                        <a onClick={handelLogout} className="btn btn-ghost hover:bg-black/5 hover:border-0">
                            Logout
                        </a>
                }
            </div>
        </div>
    );
};

export default Nav;