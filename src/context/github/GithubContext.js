import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext(null)
const githubUrl = process.env.REACT_APP_GITHUB_URL

const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    total: []

}

export const GithubProvider = ({children}) => {
    const [state, dispatch] = useReducer(githubReducer, initialState)

    // search users
    const searchUsers = async (text) => {
        dispatch({type: 'SET_LOADING'})
        const res = await fetch(`${githubUrl}search/users?q=${text}`, )
        const { items, total_count } = await res.json()
        dispatch({
            type: 'GET_USERS',
            payload: {items, total_count}
        })
    }

    // get single user
    const getUser = async (params) => {
        dispatch({type: 'SET_LOADING'})
        const res = await fetch(`${githubUrl}users/${params}`,)
        const data = await res.json()
        dispatch({
            type: 'GET_USER',
            payload: data
        })
    }
    // get user repos
    const getUserRepos = async (params) => {
        const res = await fetch(`${githubUrl}users/${params}/repos?sort=created&per_page=10`,)
        const data = await res.json()
        dispatch({
            type: 'GET_REPOS',
            payload: data
        })
    }

    // clear users
    const clearState = () => {
       return dispatch({type: 'CLEAR_STATE'})
    }

    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        total: state.total,
        searchUsers,
        clearState,
        getUser,
        getUserRepos,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext


