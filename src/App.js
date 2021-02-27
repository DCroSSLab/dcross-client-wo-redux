import './App.css';
import * as React from 'react';
import {useState, useCallback, useEffect} from 'react';
import MapGL, {Popup, Marker, NavigationControl, Layer, Source, FullscreenControl, MapContext} from 'react-map-gl';
import pin from './assets/pin.svg'

import testData from './test-data/testData'
import EarthquakePopupInfo from "./components/popups/EarthquakePopupInfo";
import Pins from "./map-layers/earthquakeLayer";
import CustomMarker from "./scratch-components/testComponent";
import Filters from "./filters/filterButton";
import EarthquakeFilter from "./filters/earthquakeFilter";
import getEarthquakes from "./services/getEarthquakes";
import NowcastsMarkers from "./map-layers/nowcastLayer";
import nowcastTestData from "./test-data/nowcast-testdata";
import NowcastPopupInfo from "./components/popups/NowcastPopupInfo";
import getIMDNowcasts from "./services/getIMDNowcasts";

const navControlStyle= {
    right: 10,
    top: 50
};

const fullScreenControl = {
    top: 10,
    right: 10,
};

const filterControlStyle = {
    right: 10,
    top: 150
};

const earthquakesData = {"type": "FeatureCollection",
                        "features": testData};

const TOKEN = "pk.eyJ1IjoiZmFyYWF6YiIsImEiOiJja2dldXNvaDIwbDR0MnlsN2s5MHJpa2xwIn0.gLOT6MvCNlMCCeDZbzW5jw";

const earthquakeLayerStyle = {
    id: 'earthquake-layer',
    type: 'symbol',
    source: 'earthquakes',
    // paint: {'fill-color': '#fff888'},
    layout: {
        'icon-image': "Google_Maps_pin",
        'icon-allow-overlap': true
    }
};

function App() {
    const [viewport, setViewport] = useState({
    longitude: 90.94,
    latitude: 26.21,
    zoom: 5,
    mapboxApiAccessToken: TOKEN
    });
    // const [fetchingData, setfetchingData] = useState(true);
    const [popupInfo, setPopupInfo] = useState(null);
    const [earthquakes, setEarthquakes] = useState([]);
    const [filteredEarthquakes, setFilteredEarthquakes] = useState([]);
    const [nowcasts, setNowcasts] = useState(nowcastTestData);
    const [filteredNowcasts, setFilteredNowcasts] = useState(nowcastTestData);
    const [nowcastInfo, setNowcastInfo] = useState(null);

    useEffect(() => {
        getEarthquakes().then((result) => {
                setEarthquakes(result["features"]);
                setFilteredEarthquakes(result["features"]);
                // console.log(result["earthquakes"])
            },
            (error) => {
                console.log(error);
            })

        // getIMDNowcasts().then((result) => {
        //     setNowcasts(result["features"]);
        //     setFilteredNowcasts(result["features"]);
        // },
        // (error) => {
        //     console.log(error);
        // })
    }, []);

    // getEarthquakes().then((result) => {
    //         setEarthquakes(result["features"]);
    //         setFilteredEarthquakes(result["features"]);
    //         // setfetchingData(false);
    //         console.log(result["earthquakes"])
    //     },
    //     (error) => {
    //         console.log(error);
    //     })


  // const markers = React.useMemo(() => testData.map(
  //     earthquake => (
  //         <Marker key={earthquake.properties.ncs_id} longitude={earthquake.geometry.coordinates[0]} latitude={earthquake.geometry.coordinates[1]} >
  //           <img src={pin} onClick={() => setPopupInfo(earthquake)}/>
  //         </Marker>
  //     )
  // ), [])

    // const makePopup = useCallback(event => {
    //     const earthquake = event.features && event.features[0];
    //     setPopupInfo(earthquake);
    // }, []);

  return (
    <MapGL {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}
           mapStyle='mapbox://styles/faraazb/ckk2r5t5n3psi17qwkxsybbqw'
        // interactiveLayerIds={['earthquake-layer']}
        // onHover={makePopup}
    >
        {/*{markers}*/}
        <Pins data={earthquakes} setData={setEarthquakes} filteredData={filteredEarthquakes}
              setFilteredData={setFilteredEarthquakes} onClick={setPopupInfo} />
        <NowcastsMarkers data={nowcasts} setData={setNowcasts} filteredData={nowcasts} onClick={setNowcastInfo} />
        {/*        setFilteredData={setFilteredNowcasts} onClick={setNowcastInfo}/>*/}
        {/*<Source id={'earthquakes'} type={"geojson"} data={earthquakes} >*/}
        {/*    <Layer {...earthquakeLayerStyle} />*/}
        {/*</Source>*/}
        {popupInfo && (
            <Popup
                tipSize={5}
                anchor="top"
                longitude={popupInfo.geometry.coordinates[0]}
                latitude={popupInfo.geometry.coordinates[1]}
                closeOnClick={false}
                onClose={setPopupInfo}
            >
                <EarthquakePopupInfo info={popupInfo} />
            </Popup>
        )}
        {nowcastInfo && (
            <Popup
                tipSize={5}
                anchor="top"
                longitude={nowcastInfo.geometry.coordinates[0]}
                latitude={nowcastInfo.geometry.coordinates[1]}
                closeOnClick={false}
                onClose={setNowcastInfo}
            >
                <NowcastPopupInfo info={nowcastInfo} />
            </Popup>
        )}
        <NavigationControl style={navControlStyle} />
        {/*<FullscreenControl style={fullScreenControl} />*/}
        {/*<CustomMarker longitude={90.94} latitude={26.21} />*/}
        <Filters >
            <EarthquakeFilter data={earthquakes} setData={setFilteredEarthquakes}/>
        </Filters>
    </MapGL>
  );
}

export default App;
