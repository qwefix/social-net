import { connect } from "react-redux";
import { ac } from "../../redux/reducers/users";
import Users from "./Users";

const mapState = (state) => {
    return {
        users: state.usersPage.users,
        totalPages: state.usersPage.totalPages,
        currentPage: state.usersPage.currentPage,
        pagination:state.usersPage.currentPage?[
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
        addUsers(users, page, totalPgaes) {
            dispatch(ac.getPage(users, page, totalPgaes))
        }
    }
}
const UsersContainer = connect(mapState, mapDispatch)(Users)
export default UsersContainer