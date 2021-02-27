import * as React from 'react';

function NowcastPopupInfo(props) {
    const {info} = props;
    const displayName = `${info.properties.station_name}, ${info.properties.source}`;

    return (
        <div>
            <div style={{maxWidth: 350}}>
                <b>{displayName}</b>
                <br/>
                {info.properties.forecast.description}
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

export default React.memo(NowcastPopupInfo);