import React from 'react';

const AppContext = React.createContext ({
    error: null,
    media: [],
    setLoginState: () => {},
    toggleLike: () => {},
});

export default AppContext;
