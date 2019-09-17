import React from 'react';

const AppContext = React.createContext ({
    error: null,
    media: [],
    isLoggedIn: null,
    setLoginState: () => {},
    toggleLike: () => {},
});

export default AppContext;
