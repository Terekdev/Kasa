import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles/main.css'
/*crée une instance de ReactDOM. Cette instance est utilisée pour rendre des composants React dans le DOM.*/
const root = ReactDOM.createRoot(document.getElementById('root'));
/* rend le composant App dans la racine du document. Le composant App est affiché au début de la page.*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);