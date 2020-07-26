import { combineReducers } from "redux";
import BurgerReducer from "../Reducer/BurgerReducer";

const rootReducer = combineReducers({
    BurgerReducer,
});

export default rootReducer;