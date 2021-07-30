const NEW_MESSAGE_ADD = 'NEW_ADD-MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW_CHANGE-MESSAGE';

let initialState = {
    1: [
        {
            content: "hello",
            sendBy: "1"
        },
        {
            content: "hello there",
            sendBy: "0"
        },
        {
            content: "you are tearing me apart",
            sendBy: "1"
        }
    ],
    2: [
        {
            content: "hello",
            sendBy: "0"
        },
        {
            content: "teach me to be jedai",
            sendBy: "0"
        },
        {
            content: "send to grievous 'hello there'",
            sendBy: "2"
        }
    ]
}

export default function dialogReducer(st = initialState, a) {
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