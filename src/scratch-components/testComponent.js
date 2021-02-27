import * as React from 'react';
// @ts-ignore
import ReactMapGL, {MapContext} from 'react-map-gl';

function CustomMarker(props) {
    const context = React.useContext(MapContext);

    const {longitude, latitude} = props;

    const [x, y] = context.viewport.project([longitude, latitude]);

    const markerStyle = {
        position: 'absolute',
        background: '#fff',
        left: x,
        top: y
    };

    return (
        <div style={markerStyle} >
            <button name={"Hello"} value={"Hello"} >
                HELLO
            </button>
        </div>
    );
}

export default CustomMarker;