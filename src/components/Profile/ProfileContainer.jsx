import { connect } from "react-redux";
import { thunks } from "../../redux/reducers/profiles";
import ProfileClass from "./ProfileClass";

const mapState =(state,{targetID})=> {
    return{
    targetID,
    headers:state.profiles.headers,
    spinner:state.profiles.spinner,
}}
const ProfileContainer = connect(mapState, thunks)(ProfileClass)
export default ProfileContainer