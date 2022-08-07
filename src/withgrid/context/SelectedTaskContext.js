import React from 'react';

const SelectedTaskContext = React.createContext({});
export const SelectedTaskProvider = SelectedTaskContext.Provider;

export default SelectedTaskContext;