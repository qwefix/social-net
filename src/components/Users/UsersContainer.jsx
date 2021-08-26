import { connect } from "react-redux";
import { ac, thunks } from "../../redux/reducers/users";
import UsersClass from "./UsersClass";

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

const UsersContainer = connect(mapState, {...ac,...thunks})(UsersClass)
export default UsersContainer