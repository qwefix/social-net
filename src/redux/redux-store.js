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
    profiles: {
        myName: "Daria Bazhenova",
        myID: "0",
        "0": {
            "profileHeaderData": {
                "name": "Daria Bazhenova",
                "ava": require(`./0/ava.jpg`).default,
                "wp": require(`./0/wp.jpg`).default,
            },
            "posts": [
                {
                    "content": "hello",
                    "likes": 0,
                    "authorID": 0,
                    "ava": require(`./0/ava.jpg`).default,
                    "name": "Daria Bazhenova"
                },
                {
                    "content": "does anybody likes me ?",
                    "likes": 31,
                    "authorID": 0,
                    "ava": require(`./0/ava.jpg`).default,
                    "name": "Daria Bazhenova"
                },
                {
                    "content": "hello there",
                    "likes": 1,
                    "authorID": 0,
                    "ava": require(`./0/ava.jpg`).default,
                    "name": "Daria Bazhenova"
                },
                {
                    "content": "you can be my padavan now",
                    "likes": 1,
                    "authorID": 2,
                    "ava": require(`./2/ava.jpg`).default,
                    "name": "General Kenobi"
                }
            ],
            "newPostValue": ""
        },
        "1": {
            "profileHeaderData": {
                "name": "General grievous",
                "ava": require(`./1/ava.jpg`).default,
                "wp": require(`./1/wp.jpg`).default,
            },
            "posts": [
                {
                    "content": "you no mach for my power!!!",
                    "likes": 2,
                    "authorID": 1,
                    "ava": require(`./1/ava.jpg`).default,
                    "name": "General grievous"
                },
                {
                    "content": "2 sabers? Take my beer",
                    "likes": 1,
                    "authorID": 1,
                    "ava": require(`./1/ava.jpg`).default,
                    "name": "General grievous"
                }
            ],
            "newPostValue": ""
        },
        "2": {
            "profileHeaderData": {
                "name": "General Kenobi",
                "ava": require(`./2/ava.jpg`).default,
                "wp": require(`./2/wp.jpg`).default,
            },
            "posts": [
                {
                    "content": "you no mach for my power!!!",
                    "likes": 0,
                    "authorID": 2,
                    "ava": require(`./2/ava.jpg`).default,
                    "name": "General Kenobi"
                }
            ],
            "newPostValue": ""
        }
    },
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