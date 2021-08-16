import { connect } from "react-redux";
import { ac } from "../../redux/reducers/users";
import UsersClass from "./UsersClass";
import * as axios from 'axios';

const mapState = (state) => {
    return {
        spinner: state.usersPage.spinner,
        users: state.usersPage.users,
        totalPages: state.usersPage.totalPages,
        currentPage: state.usersPage.currentPage,
        pagination: state.usersPage.currentPage ? [
            state.usersPage.currentPage - 2,
            state.usersPage.currentPage - 1,
            state.usersPage.currentPage,
            state.usersPage.currentPage + 1,
            state.usersPage.currentPage + 2]
            :
            [],
    }

}
const mapDispatch = (dispatch) => {
    return {
        follow(targetID) {
            dispatch(ac.follow(targetID))
        },
        unfollow(targetID) {
            dispatch(ac.unfollow(targetID))
        },
        selectPage(page) {
            dispatch(ac.selectPage(page))
            dispatch(ac.setSpinner(true))
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=10`)
                .then(response => {
                    dispatch(ac.setUsers(response))
                    dispatch(ac.setSpinner(false,page))
                })
                .catch((r) => setTimeout(() => {
                    if (r) {
                        this.selectPage(page)
                    }
                }, 2000))
        }
    }
}
const UsersContainer = connect(mapState, mapDispatch)(UsersClass)
export default UsersContainer