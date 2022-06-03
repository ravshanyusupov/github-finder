import React from 'react';
import {Link} from 'react-router-dom'

function UsersItem({user: { login, avatar_url }}) {
    return (
        <div className='card shadow-2xl compact text-center'>
            <div className='flex-row items-center space-1 card-body'></div>
            <div>
                <div className='avatar'>
                    <div className="rounded-full shadow w-14 h-14 inline">
                        <Link className='text-base-content text-opacity-30' to={`/user/${login}`}>
                            <img src={avatar_url} alt="profile_image"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title inline ">
                    {login}
                </h2>
            </div>
        </div>
    );
}

export default UsersItem;