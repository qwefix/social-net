import profileAPI from "../../api/profile";
import store from "../redux-store";

const NEW_POST_ADD = 'NEW_ADD-POST';
const NEW_POST_CHANGE = 'NEW_CHANGE-POST';
const SET_PROFILE = 'SET_PROFILE'
const SET_SPINNER = 'SET_SPINNER'

export const thunks = {
    getProfileHeader: (userID) => {
        return (dispatch) => {
            console.log(store.getState().profiles)
            if (!store.getState().profiles.headers[userID]) {
                dispatch(ac.setSpinner(true))
                profileAPI.getUser(userID)
                    .then(data => {
                        dispatch(ac.setProfile(data))
                        // if (this.props.targetID === userID)  
                        dispatch(ac.setSpinner(false))
                        console.log(store.getState().profiles.headers[userID])
                    },
                        () => {
                            setTimeout(() => {
                                this.getUser(userID)
                            }, 2000)
                        })
            }
        }
    }
}

export const ac = {
    change: ({ myID, targetID }, value) => ({
        type: NEW_POST_CHANGE,
        content: value,
        myID,
        targetID,
    }),
    add: ({ myID, targetID }) => ({
        type: NEW_POST_ADD,
        myID,
        targetID,
    }),
    setProfile: (profileData) => ({
        type: SET_PROFILE,
        profileData
    }),
    setSpinner: (spinner) => ({
        type: SET_SPINNER,
        spinner
    })
}

export default function profilesReducer(st = {}, a) {
    switch (a.type) {
        case NEW_POST_CHANGE:
            return {
                ...st,
                [a.targetID]: {
                    ...st[a.targetID],
                    newPostValue: a.content,
                }
            }
        case NEW_POST_ADD:
            return {
                ...st,
                [a.targetID]: {
                    ...st[a.targetID],
                    newPostValue: '',
                    posts: [...st[a.targetID].posts, {
                        content: st[a.targetID].newPostValue,
                        likes: 0,
                        authorID: a.myID,
                        name: st.myName,
                    }]
                }
            }
        case SET_PROFILE:
            return {
                ...st,
                headers: {
                    ...st.headers,
                    [a.profileData.userId]: a.profileData
                }
            }
        case SET_SPINNER:
            return {
                ...st, spinner: a.spinner
            }
        default:
            return st
    }
}