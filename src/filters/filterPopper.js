import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import RangeSlider from "../components/slider";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    paper: {
        // border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        // backgroundColor: white,
        borderRadius: 4,
        boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.5)",
    },
}));

export default function SimplePopper(props) {
    const classes = useStyles();
    // const [anchorEl, setAnchorEl] = React.useState(null);
    const anchorEl = props.anchorEl;
    const id = props.id;
    const open = props.open

    // const handleClick = (event) => {
    //     setAnchorEl(anchorEl ? null : event.currentTarget);
    // };



    return (
        <div>
            <Popper id={id} open={open} anchorEl={anchorEl} placement={'left'} >
                <div className={classes.paper} >
                    {/*The content of the Popper.*/}
                    {/*<TextField id="outlined-basic" label="Outlined" variant="outlined" type={"number"}*/}
                    {/*           style = {{width: 10}}/>*/}
                    <RangeSlider label={"Magnitude"}/>
                    <RangeSlider label={"Depth"}/>
                    {/*<TextField id="outlined-basic" label="Outlined" variant="outlined" type={"number"}*/}
                    {/*           style = {{width: 10}}/>*/}
                </div>
            </Popper>
        </div>
    );
}