const FOLLOW = "users_follow";
const UNFOLLOW = "users_unfollow";
const SELECT_PAGE = 'users_selectPage';
const ADD_SPINNER = 'users_spinner_add';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [],
    currentPage: 1,
    spinner: true,
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
    selectPage: (currentPage) => ({
        type: SELECT_PAGE,
        currentPage,
    }),
    setUsers: (responce) => ({
        type: SET_USERS,
        users: responce.data.items,
        totalUsers: responce.data.totalCount,
    }),
    addSpinner: () => ({ type: ADD_SPINNER }),
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
        case SELECT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                totalPages: Math.ceil(action.totalUsers / 10),
                spinner: false,
            }
        case ADD_SPINNER:
            return {
                ...state,
                spinner: true
            }
        default:
            return state
    }
}