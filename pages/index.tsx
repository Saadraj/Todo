import {
    Box,
    Container,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import AddTodo from "../component/AddTodo";
import TableView from "../component/TableView";

const customStyle = makeStyles({
    root: {
        backgroundColor: "#f7f7f7",
        padding: "1rem 0",
        minHeight: "100vh",
    },
    h2: {
        paddingBottom: "1rem",
    },
});

export default function Home() {
    const style = customStyle();
    return (
        <Grid container item className={style.root}>
            <Container maxWidth="md">
                <Box pt={10}>
                    <Typography
                        variant="h2"
                        className={style.h2}
                        color="secondary"
                        align="center"
                    >
                        Manage Your Todo
                    </Typography>
                </Box>
                <Box p="1rem 0">
                    <AddTodo />
                </Box>
                <Box pt={5}>
                    <Grid container>
                        <Grid item xs>
                            <TableView />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Grid>
    );
}
