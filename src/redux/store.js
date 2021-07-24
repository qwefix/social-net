let store = {
    _renderUI() { console.log('no observer') },
    takeRenderFunction(observer) {
        this._renderUI = observer
    },
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

    _exportMethods: {
        newPostChange(targetID, myID, content) {
            this._state[myID].postInput[targetID] = content;
            this._renderUI(this)
        },
        newPostAdd(targetID, myID) {
            this._state[targetID].posts.push({
                content: this._state[myID].postInput[targetID],
                likes: 0,
                author: myID
            })
            this._state[myID].postInput[targetID] = ''
            this._renderUI(this)
        },
        newMessageChange(targetID, myID, content) {
            this._state[myID].dialogs[targetID].newMessage = content;
            this._renderUI(this)
        },
        newMessageAdd(targetID, myID) {
            let message = {
                content: this._state[myID].dialogs[targetID].newMessage,
                sendBy: myID,
            }
            this._state[myID].dialogs[targetID].push(message)
            this._state[targetID].dialogs[myID].push(message)
            this._state[myID].dialogs[targetID].newMessage = ''
            this._renderUI(this)
        }
    },
    _newPostMethods(targetID, myID) {
        return {
            change: this._exportMethods.newPostChange.bind(this, targetID, myID),
            add: this._exportMethods.newPostAdd.bind(this, targetID, myID),
        }
    },
    _newMessageMethods(targetID, myID) {
        return {
            change: this._exportMethods.newMessageChange.bind(this, targetID, myID),
            add: this._exportMethods.newMessageAdd.bind(this, targetID, myID),
        }
    },

    getDialogsData(myID, targetID) {
        return {
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
                        fromMe:m.sendBy===myID,
                    }
                })
            ,
            newMessageMethods: this._newMessageMethods(targetID, myID),
            newMessageValue: this._state[myID].dialogs[targetID].newMessage || '',
        }
    },
    getProfileData(myID, targetID){
        return{}
    }

}
export default store