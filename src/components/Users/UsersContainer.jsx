import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,  setCurrentPage, toggleFollowingProgress, getUsersThunkCreator } from '../../redux/users-reducer'
import Users from './Users';
import Preloader from '../commen/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers, getUsersSuperSelector } from '../../redux/users-selectors';

class UsersComponent extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
       this.props.getUsers(currentPage, pageSize)
    }

    onPageChaged = (pageNumber) => {
        const { pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users onPageChaged={this.onPageChaged} 
            totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage} 
            users={this.props.users} 
            unfollow={this.props.unfollow} 
            follow={this.props.follow} 
            followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: getUsersThunkCreator }),
)(UsersComponent)