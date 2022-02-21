// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Stores MobX
import WhiteStore from './stores/WhiteStore';
import { Provider } from 'mobx-react';
const whiteStore = new WhiteStore();
const stores = { whiteStore };

// ReactDOM
ReactDOM.render(<Provider { ...stores } ><App/></Provider>, document.getElementById('root'));