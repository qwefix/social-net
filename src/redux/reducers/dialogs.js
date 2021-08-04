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

export default function dialogReducer(st = {}, a) {
    switch (a.type) {
        case NEW_MESSAGE_CHANGE:
            return {
                ...st,
                dialogField: {
                    ...st.dialogField,
                    [a.targetID]: {
                        ...st.dialogField[a.targetID],
                        newMessageValue: a.content
                    },
                }
            }
        case NEW_MESSAGE_ADD:
            return {
                ...st,
                dialogField: {
                    ...st.dialogField,
                    [a.targetID]: {
                        ...st.dialogField[a.targetID],
                        newMessageValue: '',
                        dialog: [...st.dialogField[a.targetID].dialog,
                        {
                            ava: require(`../${a.myID}/ava.jpg`).default,
                            name: st.myName,
                            content: st.dialogField[a.targetID].newMessageValue,
                            sendBy: a.myID,
                            fromMe: true,
                        }
                        ]
                    },
                }
            }
        default:
            return st;
    }
}