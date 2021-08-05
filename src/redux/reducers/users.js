const FOLLOW = "follow";
const UNFOLLOW = "unfollow";
const SET_USERS = 'setUsers';
// let users= [
//     {
//         id: 1,
//         name: "General grievous",
//         ava: require(`../../redux/1/ava.jpg`).default,
//         status: "boss of this gym",
//         location: {
//             city: 'Minsk',
//             country: 'Belarus'
//         },
//         followed: false,
//     },
//     {
//         id: 2,
//         name: "General Kenobi",
//         ava: require(`../../redux/2/ava.jpg`).default,
//         status: 'Best teacher',
//         location: {
//             city: 'Moscow',
//             country: 'Russia'
//         },
//         followed: true,
//     },
//     {
//         id: 10,
//         name: "User Placeholder",
//         ava: require(`../../redux/ph/ava.jpg`).default,
//         status: "one of empty users",
//         location: {
//             city: 'city',
//             country: 'country'
//         },
//         followed: false,
//     },
//     {
//         id: 11,
//         name: "User Placeholder",
//         ava: require(`../../redux/ph/ava.jpg`).default,
//         status: "one of empty users",
//         location: {
//             city: 'city',
//             country: 'country'
//         },
//         followed: false,
//     },
// ],

const initialState = {
    users: []
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