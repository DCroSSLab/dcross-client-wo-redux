import axios from "axios";

export default function getIMDNowcasts() {
    // return axios.get(`${process.env.REACT_APP_API_BASE}/events/earthquakes`)
    // axios.get(`/events/earthquakes`)
    //     .then(function (response) {
    //         return response
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })
    return fetch(`events/nowcasts`).then(response => response.json());
}