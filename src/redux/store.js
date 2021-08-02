import dialogReducer from "./reducers/dialogs";
import profilesReducer from "./reducers/profiles";

const store = {
    _renderUI() { console.warn('no observer(render) function') },
    subscribe(observer) { this._renderUI = observer },
    _state: {
        aside: { myID: '0', },
        profiles: {
            myName: "Daria Bazhenova",
            "0": {
                myID: "0",
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
                myID: "0",
                myName: "Daria Bazhenova",
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
                myID: "0",
                myName: "Daria Bazhenova",
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
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.dialogs = dialogReducer(this._state.dialogs, action);
        this._state.profiles = profilesReducer(this._state.profiles, action)
        this._renderUI(store)
    },
}
export default store