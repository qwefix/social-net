import { connect } from "react-redux";
import { ac } from "../../redux/reducers/users";
import Users from "./Users";

const mapState=(state)=>{
    return{
        users:state.usersPage.users
    }

}
const mapDispatch=(dispatch)=>{
    return{
        follow(targetID){
            dispatch(ac.follow(targetID))
        },
        unfollow(targetID){
            dispatch(ac.unfollow(targetID))
        },
        addUsers(users){
            dispatch(ac.setUsers(users))
        }
    }
}
const UsersContainer= connect(mapState,mapDispatch)(Users)
export default UsersContainer 