const NEW_POST_ADD = 'NEW_ADD-POST';
const NEW_POST_CHANGE = 'NEW_CHANGE-POST';
const NEW_MESSAGE_ADD = 'NEW_ADD-MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW_CHANGE-MESSAGE';

const store = {
    _renderUI() { console.warn('no observer(render) function') },
    takeRenderFunction(observer) { this._renderUI = observer },
    _state: {
        myID: 0,
        profiles: {
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
            }
        },
        dialogs: {
            1: [
                {
                    content: "hello",
                    sendBy: "1"
                },
                {
                    content: "hello there",
                    sendBy: "0"
                },
                {
                    content: "you are tearing me apart",
                    sendBy: "1"
                }
            ],
            2: [
                {
                    content: "hello",
                    sendBy: "0"
                },
                {
                    content: "teach me to be jedai",
                    sendBy: "0"
                },
                {
                    content: "send to grievous 'hello there'",
                    sendBy: "2"
                }
            ]
        },
    },

    _methods: {
        newPost: {
            add({ targetID }) {
                this._state.profiles[targetID].posts.push({
                    content: this._state.profiles[targetID].postInput,
                    likes: 0,
                    author: this._state.myID
                })
                this._state.profiles[targetID].postInput = ''
                this._renderUI(this)
            },
            change({ targetID, content }) {
                this._state.profiles[targetID].postInput = content;
                this._renderUI(this)
            },
        },
        newMessage: {
            change({ targetID, content }) {
                this._state.dialogs[targetID].newMessage = content;
                this._renderUI(this)
            },
            add({ targetID }) {
                let message = {
                    content: this._state.dialogs[targetID].newMessage,
                    sendBy: this._state.myID,
                }
                this._state.dialogs[targetID].push(message);
                this._state.dialogs[targetID].newMessage = ''
                this._renderUI(this)
            },
        }
    },
    dispatch(action) {
        switch (action.type) {
            case NEW_POST_CHANGE:
                this._methods.newPost.change.call(this, action)
                break;
            case NEW_POST_ADD:
                this._methods.newPost.add.call(this, action)
                break;
            case NEW_MESSAGE_CHANGE:
                this._methods.newMessage.change.call(this, action)
                break;
            case NEW_MESSAGE_ADD:
                this._methods.newMessage.add.call(this, action)
                break;
            default:
                break;
        }
    },

    getAsideData() { return { myID: this._state.myID } },
    getDialogsData(targetID) {
        return {
            IDs: {
                targetID,
            },
            dialogsList:
                Object.keys(this._state.dialogs).map(id => {
                    return {
                        ava: require(`./${id}/ava.jpg`).default,
                        name: this._state.profiles[id].name,
                        id: id,
                    }
                }),
            dialog:
                this._state.dialogs[targetID].map(m => {
                    return {
                        ava: require(`./${m.sendBy}/ava.jpg`).default,
                        name: this._state.profiles[m.sendBy].name,
                        sendBy: m.sendBy,
                        content: m.content,
                        fromMe: m.sendBy === this._state.myID,
                    }
                })
            ,
            dispatch: this.dispatch.bind(this),
            newMessageValue: this._state.dialogs[targetID].newMessage || '',
        }
    },
    getProfileData(targetID) {
        return {
            IDs: {
                targetID,
            },
            profileHeaderData: {
                name: this._state.profiles[targetID].name,
                ava: require(`./${targetID}/ava.jpg`).default,
                wp: require(`./${targetID}/wp.jpg`).default,
            },
            posts: this._state.profiles[targetID].posts.map(p => {
                return {
                    content: p.content,
                    likes: p.likes,
                    authorID: p.author,
                    ava: require(`./${p.author}/ava.jpg`).default,
                    name: this._state.profiles[p.author].name
                }
            })
            ,
            dispatch: this.dispatch.bind(this),
            newPostValue: this._state.profiles[targetID].postInput || '',
        }
    }

}
export default store

export const actionCreator = {
    newMessage: {
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
    },
    newPost: {
        change: ({ myID, targetID }, value) => ({
            type: NEW_POST_CHANGE,
            content: value,
            myID,
            targetID,
        }),
        add: ({ myID, targetID }) => ({
            type: NEW_POST_ADD,
            myID,
            targetID,
        }),
    }
}