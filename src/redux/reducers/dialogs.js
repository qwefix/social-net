const NEW_MESSAGE_ADD = 'NEW_ADD-MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW_CHANGE-MESSAGE';

export default function dialogReducer(st, a) {
    let state = {};
    Object.assign(state, st);
    switch (a.type) {
        case NEW_MESSAGE_CHANGE:
            state[a.targetID].newMessage = a.content;
            return state
        case NEW_MESSAGE_ADD:
            let message = {
                content: state[a.targetID].newMessage,
                sendBy: a.myID,
            }
            state[a.targetID].push(message);
            state[a.targetID].newMessage = ''
            return state;
        default:
            return state;

    }
}