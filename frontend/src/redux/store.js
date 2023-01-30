// Dependencias redux
import { configureStore } from "@reduxjs/toolkit";

// Importamos el archivo que contendrá los reducers para la autenticación de usuarios
import AuthReducer from "./actions/authSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
