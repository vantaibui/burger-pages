import { combineReducers } from "redux";
import stateModalReducer from "../Reducer/ModalReducer";

// rootReducer là state (state tổng của toàn ứng dụng)
// reducer laf state của redux
const rootReducer = combineReducers({
  stateModalReducer: stateModalReducer,
});

export default rootReducer;
