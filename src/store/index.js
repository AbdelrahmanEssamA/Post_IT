import { createStore } from "redux";
import articleReducer from "../reducers/ArticlesReducer";

const store = createStore(articleReducer);

export default store;
