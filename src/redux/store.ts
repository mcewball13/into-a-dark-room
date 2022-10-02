import { configureStore } from "@reduxjs/toolkit";
import {
    useDispatch as useAppDispatch,
    useSelector as useAppSelector,
} from "react-redux";
import { persistStore, persistReducer } from "redux-persist";

// ========================================================================================

const store = configureStore({
    reducer: {}, //persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        });
    },
});
