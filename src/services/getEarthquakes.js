import axios from "axios";

export default function getEarthquakes() {
    // return axios.get(`${process.env.REACT_APP_API_BASE}/events/earthquakes`)
    // axios.get(`/events/earthquakes`)
    //     .then(function (response) {
    //         return response
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })
    return fetch(`events/earthquakes`).then(response => response.json());
}

// const getEarthquakes = () => {
//     axios.get(`/events/earthquakes`)
//         .then(function (response) {
//             return response
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
// }
//
// export default getEarthquakes;