import usersAPI from '../../api/users';
import store from '../redux-store';

const FOLLOW = "users_follow";
const UNFOLLOW = "users_unfollow";
const SELECT_PAGE = 'users_selectPage';
const SET_SPINNER = 'users_spinner_set';
const SET_SPINNER_FOLLOW = 'users_spinner_set_follow';
const SET_USERS = 'SET_USERS';

//THUNKS
export const thunks = {
    setPage: (page) => {
        return function thunk(dispatch) {
            dispatch(ac.selectPage(page))
            dispatch(ac.setSpinner(true))
            usersAPI.setPage(page)
                .then(data => {
                    if (page === store.getState().usersPage.currentPage) {
                        dispatch(ac.setUsers(data))
                        dispatch(ac.setSpinner(false))
                    }
                },
                    () => {
                        setTimeout(() => {
                            if (page === store.getState().usersPage.currentPage) {
                                dispatch(this.setPage(page))
                            }
                        }, 2000)
                    })
        }
    },
    follow: (id) => {
        return (dispatch) => {
            dispatch(ac.setSpinnerFollow(true, id))
            usersAPI.follow(id)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(ac.setSpinnerFollow(false, id))
                        dispatch(ac.follow(id))
                    }
                })
        }

    },
    unfollow: (id) => {
        return (dispatch) => {
            dispatch(ac.setSpinnerFollow(true, id))
            usersAPI.unfollow(id)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(ac.setSpinnerFollow(false, id))
                        dispatch(ac.unfollow(id))
                    }
                })
        }
    }
}


const initialState = {
    users: [],
    currentPage: 1,
    spinner: true,
};

//Acction creators object
export const ac = {
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
    setUsers: (data) => ({
        type: SET_USERS,
        users: data.items,
        totalUsers: data.totalCount,
    }),
    setSpinnerFollow: (isFetching, targetID) => ({ type: SET_SPINNER_FOLLOW, isFetching, targetID }),
    setSpinner: (isFetching, page) => ({ type: SET_SPINNER, isFetching, page }),
}

//Dispatch reducer to redux store

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
            }
        case SET_SPINNER:
            return {
                ...state,
                spinner: action.isFetching
            }
        case SET_SPINNER_FOLLOW:
            return {
                ...state,
                users: state.users.map(a => {
                    if (a.id === action.targetID) {
                        return {
                            ...a,
                            isFetching: action.isFetching
                        }
                    }
                    return a
                })
            }
        default:
            return state
    }
}