import * as React from 'react';
import {useEffect, useMemo, useState} from 'react';
import {Marker} from 'react-map-gl';
import './earthquakeLayer.css'
import NowcastIcon from '../assets/weather.png'
import NowcastMarker from "../assets/NowcastMarker";
import pin from "../assets/cloud.svg";

const ICON = `m 29.00005,1015.3586 a 0.50005,0.50005 0 0 0 -0.212891,0.051 c -2.029304,0.067 -3.88852,1.0285 -5.164062,2.6016 -0.659715,-0.3613 -1.366356,-0.6519 -2.123047,-0.6524 -2.428171,0 -4.389643,1.9466 -4.470703,4.3555 -0.342859,-0.1334 -0.654447,-0.3548 -1.027344,-0.3555 a 0.50005,0.50005 0 0 0 -0.002,0 c -1.276697,10e-5 -2.304066,0.8712 -2.726565,2.045 C 10.900217,1023.5281 9,1025.4547 9,1027.8588 c 0,2.4843 2.015649,4.5 4.5,4.5 l 20,0 c 2.484351,0 4.5,-2.0157 4.5,-4.5 0,-1.6429 -0.943798,-3.0005 -2.257812,-3.7832 0.143698,-0.5628 0.257127,-1.1351 0.257812,-1.7168 7e-6,-3.7957 -3.046984,-6.8605 -6.818359,-6.9628 a 0.50005,0.50005 0 0 0 -0.181591,-0.037 z m 0,1 c 3.319633,0 6.000006,2.6803 6,6 -8.9e-4,0.5927 -0.09004,1.1833 -0.263672,1.75 a 0.50005,0.50005 0 0 0 0.263672,0.5977 c 1.182653,0.5618 2,1.7482 2,3.1523 0,1.9476 -1.552351,3.5 -3.5,3.5 l -20,0 c -1.947649,0 -3.5,-1.5524 -3.5,-3.5 0,-1.9477 1.552351,-3.5 3.5,-3.5 l 0.05078,0 a 0.50005,0.50005 0 0 0 0.490235,-0.4003 c 0.190663,-0.9341 1.005665,-1.5996 1.958984,-1.5997 0.447337,8e-4 0.880851,0.1512 1.232422,0.4278 a 0.50005,0.50005 0 0 0 0.802734,-0.4649 c -0.02215,-0.1532 -0.03346,-0.3082 -0.03516,-0.4629 0.0032,-1.9361 1.563081,-3.4941 3.5,-3.4941 0.699618,5e-4 1.381915,0.209 1.960938,0.6016 a 0.50005,0.50005 0 0 0 0.685546,-0.1192 c 1.127041,-1.5575 2.930992,-2.48 4.853516,-2.4824 l 0,-0.01 z m -7.507812,16.4844 a 0.50005,0.50005 0 0 0 -0.492188,0.5078 l 0,7 a 0.50005,0.50005 0 1 0 1,0 l 0,-7 a 0.50005,0.50005 0 0 0 -0.507812,-0.5078 z m -7,0.5078 a 0.50005,0.50005 0 0 0 -0.492188,0.5078 l 0,7 a 0.50005,0.50005 0 1 0 1,0 l 0,-7 a 0.50005,0.50005 0 0 0 -0.507812,-0.5078 z m 14,0 a 0.50005,0.50005 0 0 0 -0.492188,0.5078 l 0,7 a 0.50005,0.50005 0 1 0 1,0 l 0,-7 a 0.50005,0.50005 0 0 0 -0.507812,-0.5078 z m -10.500001,0.3321 a 0.50004976,0.50004976 0 0 0 -0.492187,0.5058 l 0,3.1621 a 0.50004976,0.50004976 0 1 0 1,0 l 0,-3.1621 a 0.50004976,0.50004976 0 0 0 -0.507813,-0.5058 z m 14.000001,0 a 0.50004976,0.50004976 0 0 0 -0.492188,0.5058 l 0,3.1621 a 0.50004976,0.50004976 0 1 0 1,0 l 0,-3.1621 a 0.50004976,0.50004976 0 0 0 -0.507812,-0.5058 z m -7,0.1211 a 0.50004976,0.50004976 0 0 0 -0.492188,0.5058 l 0,3.9199 a 0.50004976,0.50004976 0 1 0 1,0 l 0,-3.9199 a 0.50004976,0.50004976 0 0 0 -0.507812,-0.5058 z`;

const SIZE = 20;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function NowcastsMarkers(props) {
    const {data, setData, filteredData, setFilteredData, onClick} = props;

    if (filteredData) {
        return filteredData.map((nowcast, index) => (
            <Marker key={`marker-${index}`} longitude={nowcast.geometry.coordinates[0]}
                    latitude={nowcast.geometry.coordinates[1]} >
                {/*<NowcastMarker onHover={onClick}/>*/}
                <img src={NowcastIcon} height={24} onMouseEnter={() => onClick(nowcast)}/>
                {/*<NowcastIcon height={SIZE} onMouseEnter={() => onClick(nowcast)}/>*/}
                {/*<svg className={nowcast.properties.clas\sname}*/}
                {/*     height={SIZE}*/}
                {/*     viewBox="0 0 24 24"*/}
                {/*     style={{*/}
                {/*         cursor: 'pointer',*/}
                {/*         fill: '#d00',*/}
                {/*         // fill: earthquake.properties.fill,*/}
                {/*         stroke: 'none',*/}
                {/*         transform: `translate(${-SIZE / 2}px,${-SIZE}px)`*/}
                {/*     }}*/}
                {/*    // onClick={() => onClick(earthquake)}*/}
                {/*     onMouseEnter={() => onClick(nowcast)}*/}
                {/*    // onMouseLeave={()=> onClick(null)}*/}
                {/*>*/}
                {/*    <circle cx="24" cy="28" r="24" fill={"#ffa40b"}/>*/}
                {/*    <path d={ICON} />*/}
                {/*</svg>*/}
            </Marker>
        ));
    } else {
        return null
    }

}

export default React.memo(NowcastsMarkers);