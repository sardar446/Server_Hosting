import { applyMiddleware, createStore } from "redux";
import Apireducer from "./Apireducer";
import { thunk } from "redux-thunk";

const Store = createStore(Apireducer,applyMiddleware(thunk)

);

export default Store