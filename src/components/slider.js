import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

const styles = {
    input1: {
        height: 20
    },
    input2: {
        height: 200,
        fontSize: "3em"
    }
};


function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider(props) {
    const classes = useStyles();
    // const [value, setValue] = React.useState([5.0, 6.0]);
    const label = props.label;
    const value = props.values;
    const setValue = props.setValues;
    const sliderVars = props.slider;

    const handleChange = (event, newValue) => {
        setValue.low(newValue[0]);
        setValue.high(newValue[1]);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                {label}
            </Typography>
            <div style={{"display": "flex"}}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={sliderVars[0]}
                    max={sliderVars[1]}
                    step={sliderVars[2]}
                    // getAriaValueText={valuetext}
                />
            </div>
        </div>
    );
}