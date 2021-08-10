const FOLLOW = "users_follow";
const UNFOLLOW = "users_unfollow";
const SELECT_PAGE = 'users_selectPage';
const ADD_SPINNER = 'users_spinner_add';

const initialState = {
    users: [],
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
    selectPage: (currentPage, responce) => ({
        type: SELECT_PAGE,
        users: responce.data.items,
        currentPage,
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