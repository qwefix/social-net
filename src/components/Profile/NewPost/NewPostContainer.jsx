import { connect } from 'react-redux';
import { actionCreator } from '../../../redux/reducers/profiles';
import NewPost from './NewPost';

const mapState = (state,{IDs})=>{
    return{
        newPostValue:state.profiles[IDs.targetID].newPostValue
    }
}
const mapDispatch = (dispatch,{IDs})=>{
    return{
        changePost(text){dispatch(actionCreator.change(IDs, text))},
        addPost(){dispatch(actionCreator.add(IDs))}
    }
}

const NewPostContainer = connect(mapState,mapDispatch)(NewPost)

export default NewPostContainer;