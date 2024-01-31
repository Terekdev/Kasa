/* importe React. Fournit les classes et les fonctions pour créer des composants React.*/
import React from 'react';
/*importe le composant*/
import RoutesURL from "./components/Routes/Routes";
/*définit un composant appelé App*/
const App = () => {
/*renvoie le composant RoutesURL. Le composant App affiche le composant RoutesURL.*/
  return (
    
    <RoutesURL />
  )
}
/*exporte le composant App. Le composant App peut être utilisé par d'autres composants.*/
export default App;
