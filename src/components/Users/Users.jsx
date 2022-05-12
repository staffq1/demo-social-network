import React from 'react';
import Paginator from '../commen/Paginator/Paginator';
import User from './User';
// import { usersAPI } from './../../api/api';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChaged, users, ...props}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div> 
        <Paginator currentPage={currentPage} onPageChaged={onPageChaged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        
        {users.map((user, index) => <User user={user} key={index} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow}/>)}
    </div>
}

export default Users