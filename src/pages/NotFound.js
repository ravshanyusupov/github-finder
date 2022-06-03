import React from 'react';
import {FaHome} from "react-icons/fa";
import {Link} from 'react-router-dom'

function NotFound(props) {
    return (
            <div className="text-center">
                <h1 className="text-8xl font-bold mb-8">Oops!</h1>
                <p className='text-5xl mb-5'>404 - Page not found!</p>
                <Link className='btn' to='/'><FaHome className='mr-2'/> Back to Home </Link>
            </div>
    );
}

export default NotFound;