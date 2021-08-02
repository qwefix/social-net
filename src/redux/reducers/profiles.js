const NEW_POST_ADD = 'NEW_ADD-POST';
const NEW_POST_CHANGE = 'NEW_CHANGE-POST';

export const actionCreator = {
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
}

export default function profilesReducer(st, a) {
    let state = {};
    Object.assign(state, st)
    switch (a.type) {
        case NEW_POST_CHANGE:
            state[a.targetID].newPostValue = a.content;
            return state
        case NEW_POST_ADD:
            state[a.targetID].posts.push({
                content: state[a.targetID].newPostValue,
                likes: 0,
                authorID: a.myID,
                "ava": require(`../0/ava.jpg`).default,
                name: state.myName,
            })
            state[a.targetID].newPostValue = ''
            return state
        default:
            return state
    }
}