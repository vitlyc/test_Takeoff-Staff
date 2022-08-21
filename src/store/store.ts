import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "contacts"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
//заменить rootReducer на persistedReducer
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
