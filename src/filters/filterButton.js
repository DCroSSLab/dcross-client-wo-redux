import * as React from 'react';
import MapGL, {_useMapControl as useMapControl} from 'react-map-gl';
import '../scratch-components/testComponent2.css'
import SimplePopper from "./filterPopper";
import SimpleModal from "./filterModal";
import RangeSlider from "../components/slider";
import Popper from "@material-ui/core/Popper";
import {makeStyles} from "@material-ui/core/styles";
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Button from '@material-ui/core/Button'

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

const filterControlStyle = {
    right: 100,
    top: 150,
    position: 'relative',
    // 'z-index': 10
};

function Filters(props) {
    const {context, containerRef} = useMapControl({
        onDragStart: evt => {
            // prevent the base map from panning
            evt.stopPropagation();
        },
        onClick: evt => {
            if (evt.type === 'click') {
            }
        },
        onDoubleClick: evt => {
            evt.stopPropagation();
        }
    });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const filterControlStyle = {
        // all: 'unset',
        position: 'absolute',
        right: 10,
        top: 150,
        // height: 30,
        // width: 30,
        // boxShadow: '0 1px 1px rgba(0, 0, 0, 0.28)',
        // borderRadius: 5,
        // backgroundColor: '#fff'
        }
    const classes = useStyles();



    return (
        <div>
            <button ref={containerRef} className={"filter-button"} style={filterControlStyle}
                    aria-describedby={id} onClick={handleClick}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter"
                     className="svg-inline--fa fa-filter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512" height={20}
                     style={{cursor: 'pointer',
                         transform: `translate(${10 / 2}px,${2}px)`}}
                >
                    <path fill="rgba(0, 0, 0, 0.8)"
                          d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237
                      19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338
                      0 487.976 0z" />
                </svg>
            </button>
            {/*<SimplePopper anchorEl={anchorEl} id={id} open={open}/>*/}
            {/*<SimpleModal />*/}
            <Popper  id={id} open={open} anchorEl={anchorEl} placement={'left'} >
                <div className={classes.paper} >
                    {props.children}
                </div>
            </Popper>
        </div>
    );
};

export default React.memo(Filters);