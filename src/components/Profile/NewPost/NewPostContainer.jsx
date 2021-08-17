import { connect } from 'react-redux';
import { ac } from '../../../redux/reducers/profiles';
import NewPost from './NewPost';

const mapState = (state,{IDs})=>{
    return{
        newPostValue:state.profiles[IDs.targetID].newPostValue
    }
}
const mapDispatch = (dispatch,{IDs})=>{
    return{
        changePost(text){dispatch(ac.change(IDs, text))},
        addPost(){dispatch(ac.add(IDs))}
    }
}

const NewPostContainer = connect(mapState,mapDispatch)(NewPost)

export default NewPostContainer;