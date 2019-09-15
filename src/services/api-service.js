import { API_BASE_URL } from '../config';

const ApiServices = {
    // Get all media
    getMedia() {
        return fetch(`${API_BASE_URL}/media`)
            .then(response => {
                if(!response.ok) {
                    return response.json().then(error => Promise.reject(error))
                }
                return response.json();
            });
    },

    // log a user in
    postAuth() {

    },

    // toggle like
    postMedia() {

    },
};

export default ApiServices;
