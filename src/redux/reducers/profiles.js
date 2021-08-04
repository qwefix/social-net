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

export default function profilesReducer(st = {}, a) {
    switch (a.type) {
        case NEW_POST_CHANGE:
            return {
                ...st,
                [a.targetID]: {
                    ...st[a.targetID],
                    newPostValue: a.content,
                }
            }
        case NEW_POST_ADD:
            return {
                ...st,
                [a.targetID]: {
                    ...st[a.targetID],
                    newPostValue: '',
                    posts: [...st[a.targetID].posts, {
                        content: st[a.targetID].newPostValue,
                        likes: 0,
                        authorID: a.myID,
                        "ava": require(`../0/ava.jpg`).default,
                        name: st.myName,
                    }]
                }
            }
        default:
            return st
    }
}