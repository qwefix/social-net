let store = {
    _renderUI() { console.log('no observer') },
    takeRenderFunction(observer) { this._renderUI = observer },
    _state: {
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
    },
    _methods: {
        newPost: {
            add({ targetID, myID }) {
                this._state[targetID].posts.push({
                    content: this._state[myID].postInput[targetID],
                    likes: 0,
                    author: myID
                })
                this._state[myID].postInput[targetID] = ''
                this._renderUI(this)
            },
            change({ targetID, myID, content }) {
                this._state[myID].postInput[targetID] = content;
                this._renderUI(this)
            },
        },
        newMessage: {
            change({ targetID, myID, content }) {
                this._state[myID].dialogs[targetID].newMessage = content;
                this._renderUI(this)
            },
            add({ targetID, myID }) {
                let message = {
                    content: this._state[myID].dialogs[targetID].newMessage,
                    sendBy: myID,
                }
                this._state[myID].dialogs[targetID].push(message)
                this._state[targetID].dialogs[myID].push(message)
                this._state[myID].dialogs[targetID].newMessage = ''
                this._renderUI(this)

            },
        }
    },
    _get: {

    },
    dispatch(action) {
        switch (action.type) {
            case 'CHANGE-POST':
                this._methods.newPost.change.call(this, action)
                break;
            case 'ADD-POST':
                this._methods.newPost.add.call(this, action)
                break;
            case 'CHANGE-MESSAGE':
                this._methods.newMessage.change.call(this, action)
                break;
            case 'ADD-MESSAGE':
                this._methods.newMessage.add.call(this, action)
                break;
            default:
                break;
        }
    },

    getDialogsData(myID, targetID) {
        return {
            myID,
            targetID,
            dialogsList:
                Object.keys(this._state[myID].dialogs).map(id => {
                    return {
                        ava: require(`./${id}/ava.jpg`).default,
                        name: this._state[id].name,
                        id: id,
                    }
                }),
            dialog:
                this._state[myID].dialogs[targetID].map(m => {
                    return {
                        ava: require(`./${m.sendBy}/ava.jpg`).default,
                        name: this._state[m.sendBy].name,
                        sendBy: m.sendBy,
                        content: m.content,
                        fromMe: m.sendBy === myID,
                    }
                })
            ,
            dispatch: this.dispatch.bind(this),
            newMessageValue: this._state[myID].dialogs[targetID].newMessage || '',
        }
    },
    getProfileData(myID, targetID) {
        return {
            myID,
            targetID,
            profileHeaderData: {
                name: this._state[targetID].name,
                ava: require(`./${targetID}/ava.jpg`).default,
                wp: require(`./${targetID}/wp.jpg`).default,
            },
            posts: this._state[targetID].posts.map(p => {
                return {
                    content: p.content,
                    likes: p.likes,
                    authorID: p.author,
                    ava: require(`./${p.author}/ava.jpg`).default,
                    name: this._state[p.author].name
                }
            })
            ,
            dispatch: this.dispatch.bind(this),
            newPostValue: this._state[myID].postInput[targetID] || '',
        }
    }

}
export default store