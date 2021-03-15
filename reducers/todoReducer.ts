import { initialState } from "../pages/_app";

const uniqueId = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
};
const reducers = (
    state = [initialState],
    {
        type,
        payload,
    }: {
        type?: string;
        payload?: { id: string; title: string; description: string };
    }
) => {
    const localStorageData = JSON.parse(localStorage.getItem("todo"));
    if (!localStorageData) {
        localStorage.setItem("todo", JSON.stringify([]));
    }
    console.log("localStorageData", localStorageData);
    switch (type) {
        case "add":
            localStorage.setItem(
                "todo",
                JSON.stringify([
                    ...localStorageData,
                    { ...payload, id: uniqueId() },
                ])
            );
            return [...localStorageData, { ...payload, id: uniqueId() }];
        case "delete":
            const temp = state.filter((s: any): boolean => s.id !== payload.id);
            localStorage.setItem("todo", JSON.stringify([...temp]));
            return [...temp];
        case "update":
            state.splice(
                state.findIndex((s) => s.id === payload.id),
                1,
                payload
            );
            localStorage.setItem("todo", JSON.stringify(state));
            return state;
        default:
            return localStorageData;
    }
};

export default reducers;
