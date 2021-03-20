import React, { useReducer, useEffect } from "react";

import { AppProps } from "next/app";

import AuthContext from "~/src/lib/Auth/AuthContext";
import authReducer from "~/src/lib/Auth/authReducer";
import { listenAuthState } from "../../config/firebase";

import BookContext from "~/src/lib/Book/BookContext";
import bookReducer from "~/src/lib/Book/bookReducer";

import "../../assets/styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  const [authState, authDispatch] = useReducer(
    authReducer.reducer,
    authReducer.initialState
  );
  const [bookState, dispatch] = useReducer(
      bookReducer.reducer,
      bookReducer.initialState
  );
  useEffect(() => {
    return listenAuthState(authDispatch);
  }, []);
  return (
      <BookContext.Provider value={bookState}>
        <AuthContext.Provider value={authState}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </BookContext.Provider>
  );
}

export default MyApp;