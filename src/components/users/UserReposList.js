import React from 'react';
import ReposItem from "../layout/ReposItem";

function UserReposList({repos}) {
    return (
        <div className='rounded-lg card'>
            <div className="card-body">
                <h2 className='text-3xl font-bold card-title my-4'>
                    Latest Repositories
                </h2>
                {repos.map(repo => (
                    <ReposItem key={repo.id} repo={repo}/>
                ))}
            </div>
        </div>
    );
}

export default UserReposList;