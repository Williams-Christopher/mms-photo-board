import React from 'react';

const AppContext = React.createContext ({
    error: null,
    media: [],
    toggleLike: () => {},
});

export default AppContext;
