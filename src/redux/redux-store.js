import asideReducer from "./reducers/aside";
import dialogReducer from "./reducers/dialogs";
import myIDReducer from "./reducers/myID";
import profilesReducer from "./reducers/profiles";

const { createStore, combineReducers } = require("redux");

const rootReducer = combineReducers({
    dialogs: dialogReducer,
    profiles: profilesReducer,
    aside: asideReducer,
    myID: myIDReducer,
})

let store = createStore(rootReducer);
export default store