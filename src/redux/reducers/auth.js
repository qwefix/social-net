import authAPI from "../../api/auth";

const SET_USER_AUTH = 'SET_USER_AUTH';
const SET_USER_DATA_AUTH = 'SET_USER_DATA_AUTH';

const initialState = {
    loginedUser: {
        id: null,
        login: null,
        email: null,
        ava: null,
        name: null,
    },
    spinner: true,
    isAuth: false,
};

export const thunks = {
    autorise: () => {
        return (dispatch) => {
            authAPI.autorise()
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(ac.setUserAuth(data.data));
                        authAPI.getUserInfo(data)
                            .then(data => {
                                dispatch(ac.setUserData(data))
                            })
                    }
                })
        }
    }
}

export const ac = {
    setUserAuth: (data) => ({ type: SET_USER_AUTH, data }),
    setUserData: (data) => ({ type: SET_USER_DATA_AUTH, data }),
}
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                loginedUser: action.data,
                isAuth: true,
            }
        case SET_USER_DATA_AUTH:
            return {
                ...state,
                loginedUser: {
                    ...state.loginedUser,
                    ava: action.data.photos.small,
                    name: action.data.fullName,
                }
            }
        default:
            return state
    }
}