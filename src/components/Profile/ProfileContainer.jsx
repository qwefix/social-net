import { connect } from "react-redux";
import { ac } from "../../redux/reducers/profiles";
import ProfileClass from "./ProfileClass";

const mapState =(state,{targetID})=> {
    return{
    targetID,
    headers:state.profiles.headers,
    spinner:state.profiles.spinner,
}}
const ProfileContainer = connect(mapState, ac)(ProfileClass)
export default ProfileContainer