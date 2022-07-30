import React from 'react';
import 'normalize.css';
import './reset.css'
import { createRoot } from 'react-dom/client';
// import App from './App';
import App2 from './withgrid/App2';
import './index.css'


// render(<App />, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);
root.render(<App2 />);