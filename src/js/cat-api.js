import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_CUAb11DLcFpMAp9svBo6Rj5evX19DFM5pBvuGTp2eKqkLjhuZNvEtiScp5c61zi1";

function fetchBreeds() {
    return axios.get(`https://api.thecatapi.com/v1/breeds`).then(data => {
        return data.data});
}

function fetchCatByBreed(id) {
    return axios.get(`htstps://api.thecatapi.com/v1/images/search?breed_ids=${id}`).then(data => {
        return data.data[0];
        // return data.data[0].breeds[0];
    });
}


export {fetchBreeds, fetchCatByBreed};