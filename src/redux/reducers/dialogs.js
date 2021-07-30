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
            state.dialogField[a.targetID].newMessageValue = a.content;
            return state
        case NEW_MESSAGE_ADD:
            let message = {
                ava: require(`../${a.myID}/ava.jpg`).default,
                name: state.myName,
                content: state.dialogField[a.targetID].newMessageValue,
                sendBy: a.myID,
                fromMe: true,
            }
            state.dialogField[a.targetID].dialog.push(message);
            state.dialogField[a.targetID].newMessageValue = ''
            return state;
        default:
            return state;

    }
}