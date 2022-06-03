const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload.items,
                total: action.payload.total_count,
                loading: false
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'GET_REPOS':
            return {
                ...state,
                repos: action.payload,
            }
        case 'CLEAR_STATE':
            return {
                ...state,
                users: []
            }
        default:
            return state
    }
}


export default githubReducer