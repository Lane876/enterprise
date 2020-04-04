import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  //odakle da pocne sa skladistenjem, u ovom slucajuiz roota
  key: "root",
  storage,
  //reducer koji hocemo da sacuvamo(user je hendlovan od strane firebase-a pa nema potrebe)
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
