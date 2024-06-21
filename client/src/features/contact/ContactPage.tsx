import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CounterState, decrement, increment } from "./counterReducer";

export default function ContactPage(){
    const dispatch = useDispatch();
    const data = useSelector((state: CounterState) => state.data)
    const title = useSelector((state: CounterState) => state.title)
    return(
        <>
            <Typography variant="h2">
                {title}
            </Typography>
            <Typography variant="h5">
                The data is: {data}
            </Typography>
            <ButtonGroup>
                <Button onClick={() => dispatch(decrement())} variant="contained" color="error">Decrement</Button>
                <Button onClick={() => dispatch(increment())} variant="contained" color="primary">Increment</Button>
                <Button onClick={() => dispatch(increment(5))} variant="contained" color="secondary">Increment by 5</Button>
            </ButtonGroup>
        </>
    )
}