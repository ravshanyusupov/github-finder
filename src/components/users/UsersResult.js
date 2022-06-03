import React, { useContext } from 'react';
import UsersItem from "./UsersItem";
import GithubContext from "../../context/github/GithubContext";

function UsersResult(props) {
    const { users, loading } = useContext(GithubContext)
    if(loading){
        return (
            <div className='text-center'>
                <div className="flex items-center justify-center">
                        <div className="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full"
                             role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
            </div>
    )}else {
       return (
            <div className='grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
            {users.map(user => (
                <UsersItem key={user.id} user={user}/>
            ))}
            </div>
        )
    }
}


export default UsersResult;