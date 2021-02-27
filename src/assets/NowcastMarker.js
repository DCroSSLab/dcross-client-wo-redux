export default function NowcastMarker(props) {
    return (
        <svg onMouseEnter={props.onHover} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <circle cx="24" cy="1028.4" r="20" fill="#ffa40b"/>
            <path d="m29 1015.4a0.5 0.5 0 0 0-0.2 0.1c-2 0.1-3.9 1-5.2 2.6-0.7-0.4-1.4-0.7-2.1-0.7-2.4 0-4.4 1.9-4.5 4.4-0.3-0.1-0.7-0.4-1-0.4a0.5 0.5 0 0 0 0 0c-1.3 0-2.3 0.9-2.7 2C10.9 1023.5 9 1025.5 9 1027.9c0 2.5 2 4.5 4.5 4.5l20 0c2.5 0 4.5-2 4.5-4.5 0-1.6-0.9-3-2.3-3.8 0.1-0.6 0.3-1.1 0.3-1.7 0-3.8-3-6.9-6.8-7a0.5 0.5 0 0 0-0.2 0zm0 1c3.3 0 6 2.7 6 6 0 0.6-0.1 1.2-0.3 1.8a0.5 0.5 0 0 0 0.3 0.6c1.2 0.6 2 1.7 2 3.2 0 1.9-1.6 3.5-3.5 3.5l-20 0c-1.9 0-3.5-1.6-3.5-3.5 0-1.9 1.6-3.5 3.5-3.5l0.1 0a0.5 0.5 0 0 0 0.5-0.4c0.2-0.9 1-1.6 2-1.6 0.4 0 0.9 0.2 1.2 0.4a0.5 0.5 0 0 0 0.8-0.5c0-0.2 0-0.3 0-0.5 0-1.9 1.6-3.5 3.5-3.5 0.7 0 1.4 0.2 2 0.6a0.5 0.5 0 0 0 0.7-0.1c1.1-1.6 2.9-2.5 4.9-2.5l0 0zm-7.5 16.5a0.5 0.5 0 0 0-0.5 0.5l0 7a0.5 0.5 0 1 0 1 0l0-7a0.5 0.5 0 0 0-0.5-0.5zm-7 0.5a0.5 0.5 0 0 0-0.5 0.5l0 7a0.5 0.5 0 1 0 1 0l0-7a0.5 0.5 0 0 0-0.5-0.5zm14 0a0.5 0.5 0 0 0-0.5 0.5l0 7a0.5 0.5 0 1 0 1 0l0-7a0.5 0.5 0 0 0-0.5-0.5zm-10.5 0.3a0.5 0.5 0 0 0-0.5 0.5l0 3.2a0.5 0.5 0 1 0 1 0l0-3.2a0.5 0.5 0 0 0-0.5-0.5zm14 0a0.5 0.5 0 0 0-0.5 0.5l0 3.2a0.5 0.5 0 1 0 1 0l0-3.2a0.5 0.5 0 0 0-0.5-0.5zm-7 0.1a0.5 0.5 0 0 0-0.5 0.5l0 3.9a0.5 0.5 0 1 0 1 0l0-3.9a0.5 0.5 0 0 0-0.5-0.5z" />
        </svg>
    )
}