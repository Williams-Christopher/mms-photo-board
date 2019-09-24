import React from 'react';

const AppContext = React.createContext ({
    error: null,
    media: [],
    isLoggedIn: null,
    setLoginState: () => {},
    updateLikeCount: () => {},
});

export default AppContext;
