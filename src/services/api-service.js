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

    // create a new user
    postUser() {

    },

    // log a user in
    postAuth(loginUser) {
        return fetch(`${API_BASE_URL}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginUser)
        })
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => Promise.reject(error))
            }

            return response.json();
        });
    },

    // toggle like
    postMedia() {

    },
};

export default ApiServices;
