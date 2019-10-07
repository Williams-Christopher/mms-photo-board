import React from 'react';

const AppContext = React.createContext ({
    error: null,
    media: [],
    mediaReceived: false,
    isLoggedIn: null,
    setLoginState: () => {},
    updateLikeCount: () => {},
});

export default AppContext;
