import * as React from 'react';
import {useEffect, useMemo, useState} from 'react';
import {Marker} from 'react-map-gl';
import './earthquakeLayer.css'
import getEarthquakes from "../services/getEarthquakes";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function EarthquakeLayer(props) {
    const {data, setData, filteredData, setFilteredData, onClick} = props;
    const [magnitude, setMagnitude] = useState({lower: 3.5, higher: 7.0});
    // const magnitudeLower = 5.0;
    // const magnitudeHigher = 6.0

    // useEffect(() => {
    //
    //     // let eq = getEarthquakes();
    //     // setEarthquakes(eq);
    //     // setFilteredEarthquakes(eq);
    // }, [])

    useMemo(() => {
        data.forEach((earthquake) => {
            let mag = earthquake.properties.magnitude
            if (mag <= 4.0) {
                earthquake.properties.fill = '#3293d9'
                earthquake.properties.classname = 'earthquake-light'
            }
            else if (4.0 < mag && mag < 5.5) {
                earthquake.properties.fill = '#FFFF00'
                // earthquake.properties.fill = '#f2e527'
                earthquake.properties.classname = 'earthquake-moderate'
            }
            else if (5.5 <= mag && mag < 6.0) {
                earthquake.properties.fill = '#d96f32'
                earthquake.properties.classname = 'earthquake-strong'
            }
            else if (mag >= 6.0) {
                // console.log("We came into gt than 6 eqs")
                earthquake.properties.fill = '#d00'
                earthquake.properties.classname = 'earthquake-major'
            }
        });
        setData(data);
    }, [data])

    // useEffect(() => {
    //
    // }, []);


    
    // let points = data.filter(earthquake => earthquake.properties.magnitude >= magnitude.lower &&
    //                             earthquake.properties.magnitude <= magnitude.higher
    //                             )

    if (filteredData) {
        return filteredData.map((earthquake, index) => (
            <Marker key={`marker-${index}`} longitude={earthquake.geometry.coordinates[0]}
                    latitude={earthquake.geometry.coordinates[1]} >
                <svg className={earthquake.properties.classname}
                     height={SIZE}
                     viewBox="0 0 24 24"
                     style={{
                         cursor: 'pointer',
                         // fill: '#d00',
                         fill: earthquake.properties.fill,
                         stroke: 'none',
                         transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                     }}
                    // onClick={() => onClick(earthquake)}
                     onMouseEnter={() => onClick(earthquake)}
                    // onMouseLeave={()=> onClick(null)}
                >
                    <path d={ICON} />
                </svg>
            </Marker>
        ));
    } else {
        return null
    }

}

export default React.memo(EarthquakeLayer);