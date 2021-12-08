import React from "react";
import {connect} from "react-redux";
import {
    follow, followSucces, followSuccess, getUsersThunkCreator,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollow, unfollowSucces, unfollowSuccess
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from '../../img/spiner.svg';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }

}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// }

let a = 15;
let user = {name: a};


class UsersContainerComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <>
            {this.props.isFetching ? <Preloader src={preloader}/> : null}
            <Users followSuccess={this.props.followSuccess} unfollowSuccess={this.props.unfollowSuccess}
                   toggleFollowingProgress={this.props.toggleFollowingProgress} onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage} users={this.props.users} pages={pages}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

export default connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    getUsersThunkCreator
})(UsersContainerComponent);