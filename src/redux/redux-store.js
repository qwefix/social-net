import dialogReducer from "./reducers/dialogs";
import profilesReducer from "./reducers/profiles";
import { createStore, combineReducers, applyMiddleware } from "redux";
import asideReducer from "./reducers/aside";
import usersReducer from "./reducers/users";
import authReducer from "./reducers/auth";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    dialogs: dialogReducer,
    profiles: profilesReducer,
    aside: asideReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
const initialState = {
    aside: { myID: '0', },
    profiles: { headers: {}, spinner: true },
    dialogs: {
        "dialogsList": [
            {
                "name": "General grievous",
                "id": "1"
            },
            {
                "name": "General Kenobi",
                "id": "2"
            }
        ],
        "dialogField": {
            1: {
                "newMessageValue": "",
                dialog: [
                    {
                        "name": "General grievous",
                        "sendBy": "1",
                        "content": "hello",
                        "fromMe": false
                    },
                    {
                        "name": "Daria Bazhenova",
                        "sendBy": "0",
                        "content": "hello there",
                        "fromMe": true
                    },
                    {
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
                        "name": "Daria Bazhenova",
                        "sendBy": "0",
                        "content": "hello",
                        "fromMe": true
                    },
                    {
                        "name": "Daria Bazhenova",
                        "sendBy": "0",
                        "content": "teach me to be jedai",
                        "fromMe": true
                    },
                    {
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

const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
window.store = store
export default store