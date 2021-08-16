const FOLLOW = "users_follow";
const UNFOLLOW = "users_unfollow";
const SELECT_PAGE = 'users_selectPage';
const SET_SPINNER = 'users_spinner_set';
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
    setSpinner: (isFetching, page) => ({ type: SET_SPINNER, isFetching, page }),
}
export { ac }
export default function usersReducer(state = initialState, action) {
    console.log(action)
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
            }
        case SET_SPINNER:
            if (action.isFetching || action.page === state.currentPage) {
                return {
                    ...state,
                    spinner: action.isFetching
                }
            }
            return { ...state }

        default:
            return state
    }
}