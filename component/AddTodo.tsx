import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/AddCircle";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import React, { useContext, useState } from "react";
import { initialState, StateContext } from "../pages/_app";

export default function AddTodo() {
    const { dispatch } = useContext(StateContext);
    const [state, setState] = useState(initialState);
    const changeHandler = (e: { target: { name: string; value: string } }) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const reset = () => {
        setState(initialState);
    };
    const submitHandler = () => {
        dispatch({
            type: "add",
            payload: state,
        });
        reset();
    };
    const { title, description } = state;
    return (
        <Grid container spacing={1}>
            <Grid item xs={5}>
                <TextField
                    multiline
                    rowsMax={4}
                    label="Title"
                    color="secondary"
                    name="title"
                    value={title}
                    onChange={changeHandler}
                    style={{ width: "95%" }}
                />
            </Grid>
            <Grid item xs={5}>
                <TextField
                    multiline
                    rowsMax={4}
                    label="Description"
                    name="description"
                    color="secondary"
                    value={description}
                    onChange={changeHandler}
                    style={{ width: "95%" }}
                />
            </Grid>
            <Grid item xs={1}>
                <IconButton onClick={reset}>
                    <RotateLeftIcon color="secondary" />
                </IconButton>
            </Grid>
            <Grid item xs={1}>
                <IconButton onClick={submitHandler}>
                    <AddIcon color="secondary" />
                </IconButton>
            </Grid>
        </Grid>
    );
}
