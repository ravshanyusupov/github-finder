import React from 'react';
import UsersResult from "../components/users/UsersResult";
import UserSearch from "../components/users/UserSearch";

function Home(props) {
    return (
        <><br/>
            <UserSearch/>
            <UsersResult/>
        </>
    );
}

export default Home;