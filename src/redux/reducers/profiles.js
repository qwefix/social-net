const NEW_POST_ADD = 'NEW_ADD-POST';
const NEW_POST_CHANGE = 'NEW_CHANGE-POST';

export default function profilesReducer(st, a) {
    let state = {};
    Object.assign(state, st)
    switch (a.type) {
        case NEW_POST_CHANGE:
            state[a.targetID].postInput = a.content;
            return state
        case NEW_POST_ADD:
            state[a.targetID].posts.push({
                content: state[a.targetID].postInput,
                likes: 0,
                author: a.myID
            })
            state[a.targetID].postInput = ''
            return state
        default:
            return state
    }
}