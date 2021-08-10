import { connect } from "react-redux";
import { ac } from "../../redux/reducers/users";
import Users from "./Users";
import * as axios from 'axios';

const mapState = (state) => {
    return {
        spinner:state.usersPage.spinner,
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
        selectPage(page) {
            dispatch(ac.addSpinner())            
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=10`)
                .then(response => { 
                    dispatch(ac.selectPage( page,response))
                })
                .catch((r)=>setTimeout(()=>{
                    console.log(r)
                    if(r){
                    this.selectPage(page)
                    }
                },1000))        
        }
    }
}
const UsersContainer = connect(mapState, mapDispatch)(Users)
export default UsersContainer