const NEW_MESSAGE_ADD = 'NEW_ADD-MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW_CHANGE-MESSAGE';

export const actionCreator = {
    change: ({ myID, targetID }, value) => ({
        type: NEW_MESSAGE_CHANGE,
        content: value,
        myID,
        targetID,
    }),
    add: ({ myID, targetID }) => ({
        type: NEW_MESSAGE_ADD,
        myID,
        targetID,
    })
}

export default function dialogReducer(st, a) {
    let state = {};
    Object.assign(state, st)
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
            state.dialogField = JSON.parse(JSON.stringify(st.dialogField))
            state.dialogField[a.targetID].dialog.push(message);
            state.dialogField[a.targetID].newMessageValue = '';
            return state;
        default:
            return state;

    }
}