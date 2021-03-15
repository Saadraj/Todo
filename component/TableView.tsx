import { Tooltip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useContext, useState } from "react";
import { initialState, StateContext } from "../pages/_app";
import UpdateTodo from "./UpdateTodo";

export default function TableView() {
    const { state, dispatch } = useContext(StateContext);
    const [open, setOpen] = useState(false);
    const [temp, setTemp] = useState(initialState);
    const deleteHandler = (obj: any) => {
        dispatch({
            type: "delete",
            payload: obj,
        });
    };

    const handleClickOpen = (obj: {
        id: string;
        title: string;
        description: string;
    }) => {
        setTemp(obj);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setTemp(initialState);
    };
    const update = (obj: {
        id: string;
        title: string;
        description: string;
    }) => {
        dispatch({
            type: "update",
            payload: { id: obj.id, ...obj },
        });
        handleClose();
    };
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="center">Customize</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state?.map(
                        (
                            row: { id: any; title: any; description: any },
                            i: number
                        ) => (
                            <TableRow hover key={row.id}>
                                <TableCell
                                    align="left"
                                    component="th"
                                    scope="row"
                                >
                                    {++i}
                                </TableCell>
                                <TableCell
                                    align="left"
                                    component="th"
                                    scope="row"
                                >
                                    {row.title}
                                </TableCell>
                                <TableCell align="left">
                                    {row.description}
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title="Edit Todo">
                                        <IconButton
                                            onClick={() => handleClickOpen(row)}
                                        >
                                            <EditIcon color="primary" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete Todo">
                                        <IconButton
                                            onClick={() => deleteHandler(row)}
                                        >
                                            <DeleteIcon color="error" />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
            {temp.id && (
                <UpdateTodo
                    open={open}
                    updateState={temp}
                    update={update}
                    close={handleClose}
                />
            )}
        </TableContainer>
    );
}
