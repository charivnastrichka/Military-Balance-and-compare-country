import React from 'react';
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import MainPage from './Components/mainPage/MainPage';
import Header from './Components/header/Header';
import ComparePage from './Components/comparePage/ComparePage';
import CountriesComparison from './Components/countriesComparison/CountriesComparison';
import AirPower from './Components/airPower/AirPower';
import LandForces from './Components/landForces/LandForces';
import DefenseSpending from './Components/defenseSpending/DefenseSpending';
import InfoAboutCountry from './Components/infoAboutCountry/InfoAboutCountry';
const App=()=> {
  return (
    <div className="App">
      <Header/>
     <Router>
        <Routes> 
          <Route exact path="/"    element={<MainPage/>}/>
          <Route path="/main"  element={<MainPage />} />
          <Route exact path="/compare"  element={<ComparePage/>}/>
          <Route path="/airpower"  element={<AirPower/>}/>
          <Route path="/compare/countries"  element={<CountriesComparison/>}/>
          <Route path="/vehicle"  element={<LandForces/>}/>
          <Route path="/spending"  element={<DefenseSpending/>}/>
          <Route path="/country/:nameCountry"  element={<InfoAboutCountry/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
