import React from 'react';

const SelectedProjectContext = React.createContext({});
export const SelectedProjectProvider = SelectedProjectContext.Provider;

export default SelectedProjectContext;