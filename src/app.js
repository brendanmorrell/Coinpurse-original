import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';
import './styles/styles.scss';


const rootApp = document.getElementById('app');
ReactDOM.render(<AppRouter />, rootApp);
