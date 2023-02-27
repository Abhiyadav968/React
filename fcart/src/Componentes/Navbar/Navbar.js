import React from 'react'

const Navbar = () => {

    const nav = [
        { name: 'Home'},
        { name: 'About Us'},
        { name: 'The Team'},
        { name: 'Contact Us'}
    ]

    return (
        <>
            {nav.map(e => (
                <div key={e.to} className="w-full">
                    <p className='flex text-red-500'>{e.name}</p>
                </div>
            ))}
        </>
    )
}

export default Navbar