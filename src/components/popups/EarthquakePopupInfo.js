import * as React from 'react';

function EarthquakePopupInfo(props) {
    const {info} = props;
    const displayName = `${info.properties.name}, ${info.properties.magnitude}`;

    return (
        <div>
            <div>
                {displayName}
                <br/>
                Depth: {info.properties.depth.value} km
                {/*<a*/}
                {/*    target="_new"*/}
                {/*    href={`http://en.wikipedia.org/`}*/}
                {/*>*/}
                {/*    Wikipedia*/}
                {/*</a>*/}
            </div>
            {/*<img width={240} src={info.image} />*/}
        </div>
    );
}

export default React.memo(EarthquakePopupInfo);