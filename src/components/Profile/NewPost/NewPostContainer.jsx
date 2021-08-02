import React from 'react';
import { actionCreator } from '../../../redux/reducers/profiles';
import NewPost from './NewPost';

const NewPostContainer = ({ store, targetID }) => {
    const state = store.getState().profiles   
    const IDs = { targetID,myID:state.myID }

    function addPost() {
        store.dispatch(actionCreator.add(IDs))
    }

    function changePost(text) {
        store.dispatch(actionCreator.change(IDs, text));
    }

    return (
        <NewPost
            newPostValue={state[targetID].newPostValue}
            addPost={addPost}
            changePost={changePost}
        />
    )
}

export default NewPostContainer;