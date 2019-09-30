import { API_BASE_URL } from '../config';
import TokenServices from './token-services';

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
    postUser(newUser) {
        return fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
        .then(result => {
            if(!result.ok) {
                return result.json().then(error => Promise.reject(error));
            }
            return result;
        })
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
    postMedia(mediaId) {
        const requestBody = {
            media_id: mediaId
        };

        return fetch(`${API_BASE_URL}/media`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenServices.getToken()}`,
            },
            body: JSON.stringify(requestBody)
        })
        .then(newLikeCount =>{
            if(!newLikeCount) {
                return newLikeCount.json().then(error => Promise.reject(error));
            }

            return newLikeCount.json();
        });
    },
};

export default ApiServices;
