import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import Cart from './Cart';


const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/Home" },
        { name: "SERVICE", link: "/Service" },
        { name: "ABOUT", link: "/About" },
        { name: "BLOG'S", link: "/Blogs" },
        { name: "CONTACT", link: "/Contact" },
    ]

    let [open, setOpen] = useState(false);

    const [inner, setInner] = useState(false)

    const click = () => {
        setInner(!inner)
        // console.log(inner)
    }

    return (
        <>
            <div className="shadow-md bg-indigo-700 w-full fixed top-0">
                <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                    <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800">
                        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                            <ion-icon name="logo-ionic"></ion-icon>
                        </span>
                        Desinear
                    </div>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12
                     absolute md:static bg-white md:z-auto z-[-1] left-0 w-full
                      md:w-auto md:pl-0 pl-9 duration-700 transition-all ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <Link key={link.name} to={link.link} className='md:ml-8 text-xl block md:my-0 my-7'>
                                    <a className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                                </Link>
                            ))
                        }

                    </ul>
                    <div className='' >
                        <FaShoppingCart className='text-red-500 text-2xl cursor-pointer' onClick={click} />
                    </div>
                </div>
                {inner === true ? <Cart /> : null}
            </div>

        </>
    );
};

export default Navbar;