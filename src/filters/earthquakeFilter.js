import {useEffect, useState} from "react";
import RangeSlider from "../components/slider";
import * as React from "react";


export default function EarthquakeFilter(props) {
    const {data, setData} = props;
    const unfilteredData = data;
    const [highMagnitude, setHighMagnitude] = useState(6.5);
    const [lowMagnitude, setLowMagnitude] = useState(4.5);
    const [highDepth, setHighDepth] = useState(550);
    const [lowDepth, setLowDepth] = useState(1);
    // const [magnitude, setMagnitude] = useState([lowMagnitude, highMagnitude]);

    // setData(data.filter(earthquake => earthquake.properties.magnitude >= magnitude[0] &&
    //     earthquake.properties.magnitude <= magnitude[1]
    // ));

    const magnitudeMarks = [
        {value: 4.0},
        {value: 5.5},
        {value: 6.0}
    ]

    useEffect(() => {
        let filteredData = unfilteredData.filter(earthquake =>
            earthquake.properties.magnitude >= lowMagnitude &&
            earthquake.properties.magnitude <= highMagnitude &&
            earthquake.properties.depth.value >= lowDepth &&
            earthquake.properties.depth.value <= highDepth
        );
        setData(filteredData);
    }, [lowMagnitude, highMagnitude, lowDepth, highDepth])

    // let points = data.filter(earthquake => earthquake.properties.magnitude >= magnitude.lower &&
    //     earthquake.properties.magnitude <= magnitude.higher
    // )

    return (
        <div>
            Earthquakes
            <RangeSlider label={"Magnitude"} values={[lowMagnitude, highMagnitude]} slider={[1.0, 10.0, 0.1]}
                         setValues={{low: setLowMagnitude, high: setHighMagnitude}} />
            <RangeSlider label={"Depth"} values={[lowDepth, highDepth]} slider={[1, 700, 1]}
                         setValues={{low: setLowDepth, high: setHighDepth}}/>
        </div>
    );
}