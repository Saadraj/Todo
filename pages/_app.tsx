import Head from "next/head";
import { createContext, useEffect, useReducer } from "react";
import reducers from "../reducers/todoReducer";

export const initialState = {
    id: "",
    title: "",
    description: "",
};

export const StateContext = createContext(null);
function MyApp({ Component, pageProps }) {
    const [state, dispatch] = useReducer(reducers, []);
    useEffect(() => {
        if (state.length === 0) {
            dispatch({});
        }
    }, []);
    return (
        <>
            <Head>
                <title>To Do - App</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>
            <StateContext.Provider value={{ state, dispatch }}>
                <Component {...pageProps} />
            </StateContext.Provider>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </>
    );
}

export default MyApp;
