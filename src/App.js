import React from 'react'; 
import { Routes, Route } from 'react-router-dom';

import './styles/index.css';
import { Home, AboutMe, Project, Licenses } from './pages';
import { Header, Footer } from './components';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/about-me' element={<AboutMe/>}/>
          <Route path='/projects/:slug' element={<Project/>}/>
          <Route path='/licenses' element={<Licenses/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
