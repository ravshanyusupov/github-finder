import React from 'react';
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Navbar({title}) {
    return (
        <nav className='navbar bg-neutral text-neutral-content'>
            <div className="container mx-auto">
                <FaGithub className='inline text-3xl' />
                <Link className='text-xl mx-10 font-bold' to='/'>{title}</Link>
            </div>
            <div className="flex-1">
                <div className="flex justify-end">
                    <Link className='btn btn-ghost btn-sm rounded-btn' to='/'>Home</Link>
                    <Link className='btn btn-ghost btn-sm rounded-btn' to='/about'>About</Link>
                </div>
            </div>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'Github Account Finder'
}

export default Navbar;