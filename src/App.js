import './style.css';
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/components item/DetailsItem';
import { createContext, useState } from 'react';
import ProviderContextoListCart from './components/components item/providerContextoListCart';
//import { app } from './utils/firebase';
import {fetchSimulation} from './utils/firebase';


function App() {
console.log(App);
  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ <DetailsItem />} />
            <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
          </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>
    
    
  );
}

//console.log(fetchSimulation)
fetchSimulation().then(res=>console.log(res))

export default App;
