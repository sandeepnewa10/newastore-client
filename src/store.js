import {configureStore} from  "@reduxjs/toolkit"

import userReducer from "./pages/login/userSlice" 
import systemReducer from "./pages/system-state/systemSlice.js"
import categoryReducer from "./pages/categoeries/categorySlice"

const store =  configureStore({
    reducer: {
        admin: userReducer,
        system: systemReducer,
        category: categoryReducer,
    },
})
export default store