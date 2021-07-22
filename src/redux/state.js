import renderUI from "../renderUI";

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
            "1": [
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
            "1": [
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
        },
    },
}

Object.keys(state).forEach(id => {
    state[id].ava = require(`./${id}/ava.jpg`).default;
    state[id].wp = require(`./${id}/wp.jpg`).default;
})

function change(content, targetID, authorID) {
    state[authorID].postInput[targetID] = content;
    renderUI(state,methods)
}

function add(targetID, authorID) {
    state[targetID].posts.push({
        content: state[authorID].postInput[targetID],
        likes: 0,
        author: authorID
    })
    state[authorID].postInput[targetID] = ''
    renderUI(state,methods)
}

export default state

export const methods ={
    newPost:{change,add},
}