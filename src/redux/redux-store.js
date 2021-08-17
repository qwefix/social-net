import dialogReducer from "./reducers/dialogs";
import profilesReducer from "./reducers/profiles";
import { createStore, combineReducers } from "redux";
import asideReducer from "./reducers/aside";
import usersReducer from "./reducers/users";

const rootReducer = combineReducers({
    dialogs: dialogReducer,
    profiles: profilesReducer,
    aside: asideReducer,
    usersPage: usersReducer,
})
const initialState = {
    aside: { myID: '0', },
    profiles: { headers: {}, spinner: true },
    dialogs: {
        myName: "Daria Bazhenova",
        myID: '0',
        "dialogsList": [
            {
                ava: require(`./${1}/ava.jpg`).default,
                "name": "General grievous",
                "id": "1"
            },
            {
                ava: require(`./${2}/ava.jpg`).default,
                "name": "General Kenobi",
                "id": "2"
            }
        ],
        "dialogField": {
            1: {
                "newMessageValue": "",
                dialog: [
                    {
                        ava: require(`./${1}/ava.jpg`).default,
                        "name": "General grievous",
                        "sendBy": "1",
                        "content": "hello",
                        "fromMe": false
                    },
                    {
                        ava: require(`./${0}/ava.jpg`).default,
                        "name": "Daria Bazhenova",
                        "sendBy": "0",
                        "content": "hello there",
                        "fromMe": true
                    },
                    {
                        ava: require(`./${1}/ava.jpg`).default,
                        "name": "General grievous",
                        "sendBy": "1",
                        "content": "you are tearing me apart",
                        "fromMe": false
                    }
                ],
            },
            2: {
                "newMessageValue": "",
                dialog: [
                    {
                        ava: require(`./${0}/ava.jpg`).default,
                        "name": "Daria Bazhenova",
                        "sendBy": "0",
                        "content": "hello",
                        "fromMe": true
                    },
                    {
                        ava: require(`./${0}/ava.jpg`).default,
                        "name": "Daria Bazhenova",
                        "sendBy": "0",
                        "content": "teach me to be jedai",
                        "fromMe": true
                    },
                    {
                        ava: require(`./${2}/ava.jpg`).default,
                        "name": "General Kenobi",
                        "sendBy": "2",
                        "content": "send to grievous 'hello there'",
                        "fromMe": false
                    }
                ],
            },
        },
    },
}

let store = createStore(rootReducer, initialState);
window.store = store
export default store