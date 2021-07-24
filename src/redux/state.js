import store from "./store"

let renderUI = () => { console.log('no observer') }
export function subscriber(observer) {
    renderUI = observer
}


let state = {
    0: {
        "name": "Daria Bazhenova",
        "id": 0,
        "posts": [
            {
                "content": "hello",
                "likes": 0,
                "author": 0
            },
            {
                "content": "does anybody likes me ?",
                "likes": 31,
                "author": 0
            },
            {
                "content": "hello there",
                "likes": 1,
                "author": 0
            },
            {
                "content": "you can be my padavan now",
                "likes": 1,
                "author": 2
            }
        ],
        "dialogs": {
            "1": [
                {
                    "content": "hello",
                    "sendBy": "1"
                },
                {
                    "content": "hello there",
                    "sendBy": "0"
                },
                {
                    "content": "you are tearing me apart",
                    "sendBy": "1"
                }
            ],
            "2": [
                {
                    "content": "hello",
                    "sendBy": "0"
                },
                {
                    "content": "teach me to be jedai",
                    "sendBy": "0"
                },
                {
                    "content": "send to grievous 'hello there'",
                    "sendBy": "2"
                }
            ]
        },
        postInput: {
            0: '',
            1: '',
            2: '',
        }
    },
    1: {
        "name": "General grievous",
        "id": 1,
        "posts": [
            {
                "content": "you no mach for my power!!!",
                "likes": 2,
                "author": 1
            },
            {
                "content": "2 sabers? Take my beer",
                "likes": 1,
                "author": 1
            }
        ],
        "dialogs": {
            "0": [
                {
                    "content": "hello",
                    "sendBy": 1
                },
                {
                    "content": "hello there",
                    "sendBy": 0
                },
                {
                    "content": "you are tearing me apart",
                    "sendBy": 1
                }
            ]
        },
        postInput: {
            0: '',
            1: '',
            2: '',
        }
    },
    2: {
        "name": "General Kenobi",
        "id": 2,
        "posts": [
            {
                "content": "you no mach for my power!!!",
                "likes": 0,
                "author": 2
            }
        ],
        "dialogs": {
            "0": [
                {
                    "content": "hello",
                    "sendBy": "0"
                },
                {
                    "content": "teach me to be jedai",
                    "sendBy": "0"
                },
                {
                    "content": "send to grievous 'hello there'",
                    "sendBy": "2"
                }
            ]
        },
        postInput: {
            0: '',
            1: '',
            2: '',
        },
    },
}

Object.keys(state).forEach(id => {
    state[id].ava = require(`./${id}/ava.jpg`).default;
    state[id].wp = require(`./${id}/wp.jpg`).default;
})

function newPostChange(content, targetID, authorID) {
    state[authorID].postInput[targetID] = content;
    renderUI(store,state, methods)
}

function newPostAdd(targetID, authorID) {
    state[targetID].posts.push({
        content: state[authorID].postInput[targetID],
        likes: 0,
        author: authorID
    })
    state[authorID].postInput[targetID] = ''
    renderUI(store,state, methods)
}

function newMessageChange(content, myID, targetID) {
    state[myID].dialogs[targetID].newMessage = content;
    renderUI(store,state, methods)
}

function newMessageAdd(myID, targetID) {
    let message = {
        content: state[myID].dialogs[targetID].newMessage,
        sendBy: myID,
    }
    state[myID].dialogs[targetID].push(message)
    state[targetID].dialogs[myID].push(message)
    state[myID].dialogs[targetID].newMessage = ''
    renderUI(store,state, methods)
}

export default state

export const methods = {
    newPost: {
        change: newPostChange,
        add: newPostAdd
    },
    newMessage: {
        change: newMessageChange,
        add: newMessageAdd
    }
}