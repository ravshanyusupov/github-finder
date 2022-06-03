import React, {useState, useContext} from 'react';
import githubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch(props) {
    const [text, setText] = useState('')
    const { users, searchUsers, clearState } = useContext(githubContext)
    const {setAlert} = useContext(AlertContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            setAlert('Try again', 'error')
        }else {
            // do something
            searchUsers(text)
            setText('')
        }
    }
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form className='form-control' onSubmit={handleSubmit}>
                    <div className='relative'>
                        <input
                            type="text"
                            onChange={e => setText(e.target.value)}
                            value={text}
                            className='w-full input input-lg border-gray-400' placeholder='Search github account'/>
                        <button
                            className='absolute btn btn-lg top-0 right-0'
                        >Search</button>
                    </div>
                </form>
            </div>
            {users.length > 0 &&
                <div>
                    <button
                        onClick={clearState}
                        className='btn btn-lg'
                    >Clear</button>
                </div>}
        </div>
    );
}

export default UserSearch;