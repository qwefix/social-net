const NEW_POST_ADD = 'NEW_ADD-POST';
const NEW_POST_CHANGE = 'NEW_CHANGE-POST';

export const actionCreator = {
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

let initialState = {
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
}

export default function profilesReducer(st = initialState, a) {
    let state = {};
    Object.assign(state, st)
    switch (a.type) {
        case NEW_POST_CHANGE:
            state[a.targetID].newPostValue = a.content;
            return state
        case NEW_POST_ADD:
            state[a.targetID].posts.push({
                content: state[a.targetID].newPostValue,
                likes: 0,
                authorID: a.myID,
                "ava": require(`../0/ava.jpg`).default,
                name: state.myName,
            })
            state[a.targetID].newPostValue = ''
            return state
        default:
            return state
    }
}