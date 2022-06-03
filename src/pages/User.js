import React, {useContext, useEffect} from 'react';
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from "react-icons/fa";
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom'
import githubContext from "../context/github/GithubContext";
import UserReposList from "../components/users/UserReposList";

function User(props) {
    const {getUser, user, loading, getUserRepos, repos} = useContext(githubContext)
    const params = useParams()

    useEffect(() => {
        getUser(params.login)
        getUserRepos(params.login)
    }, [])
    if (loading) {
        return <div className='text-center'>
                <div className="flex items-center justify-center">
                        <div className="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full"
                             role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
            </div>
    }
    return  <>
        <div className="w-full mx-auto lg:10/12">
            <div className="mb-4">
                <Link to='/' className='btn'>Back to Search</Link>
            </div>
            <div className="grid grid-cols1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-8">
                <div className="custom-card-image mb-6 md:mb-0">
                    <div className="card image-full">
                        <figure>
                            <img src={user.avatar_url} alt=""/>
                        </figure>
                        <div className="card-body">
                            <h2 className='card-title'>{user.name}</h2>
                            <p>{user.login}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="mb-6">
                        <h1 className="text-3xl card-title">{user.name}
                        <div className="ml-2 mr-1 badge badge-success">{user.type}</div>
                            {user.hireable &&
                                <div className="mx-1 badge badge-info">
                                    Hireable
                                </div>}
                        </h1>
                        <p>{user.bio}</p>
                        <div className="mt-4 card-actions">
                            <a
                                href={user.html_url}
                                className='btn btn-outline'
                                target='_blank'
                            >Visit Github Profile</a>
                        </div>
                    </div>
                    <div className="w-full rounded-lg shadow-mg bg-base-100 stats">
                        {user.location && (
                            <div className="stat">
                                <div className="stat-title text-md">Lacation</div>
                                <div className="text-lg stat-value">{user.location}</div>
                            </div>
                        )}
                        {user.blog && (
                            <div className="stat">
                                <div className="stat-title text-md">Website</div>
                                <a href={`https://${user.blog}`} target='_blank'>{user.blog}</a>
                            </div>
                        )}
                        {user.twitter_username && (
                            <div className="stat">
                                <div className="stat-title text-md">Twitter</div>
                                <a href={`https://twitter.com/${user.twitter_username}`} target='_blank'>{user.twitter_username}</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full py-5 mb-6 rounded-lg shadow-md stats">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className='text-3xl md:5xl'/>
                    </div>
                    <div className="stat-title pr-5">Followers</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{user.followers}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUserFriends className='text-3xl md:5xl'/>
                    </div>
                    <div className="stat-title pr-5">Following</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{user.following}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaCodepen className='text-3xl md:5xl'/>
                    </div>
                    <div className="stat-title pr-5">Public Repos</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{user.public_repos}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaStore className='text-3xl md:5xl'/>
                    </div>
                    <div className="stat-title pr-5">Public Gists</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">{user.public_gists}</div>
                </div>
            </div>
            <UserReposList repos={repos}/>
        </div>
    </>

}

export default User;