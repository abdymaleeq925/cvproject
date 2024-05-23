import React from 'react'; 
import { Routes, Route } from 'react-router-dom';



import './App.css';
import './styles/homepage.css';
import { Home, AboutMe, Projects, Licenses } from './pages';
import { Header, Footer } from './components';
function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/licenses' element={<Licenses/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
