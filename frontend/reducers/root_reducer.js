import { combineReducers } from "redux";

import sessionsReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionsReducer,
    errors: errorsReducer
});

export default rootReducer;