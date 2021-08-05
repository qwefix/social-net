const FOLLOW = "follow";
const UNFOLLOW = "unfollow";
const SET_USERS = 'setUsers';

const initialState = {
    users: [],
};

const ac = {
    follow: (targetID) => ({
        type: FOLLOW,
        targetID,
    }),
    unfollow: (targetID) => ({
        type: UNFOLLOW,
        targetID,
    }),
    setUsers: (users) => ({
        type: SET_USERS,
        users
    })
}
export { ac }
export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(a => {
                    if (a.id === action.targetID) {
                        return {
                            ...a,
                            followed: true
                        }
                    } else return a
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(a => {
                    if (a.id === action.targetID) {
                        return {
                            ...a,
                            followed: false
                        }
                    } else return a
                })
            }
        case SET_USERS: return { ...state, users: [...state.users, ...action.users] }
        default:
            return state
    }
}