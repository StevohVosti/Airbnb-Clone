import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { Route, Routes} from 'react-router-dom'
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="App">
    
      <Header />
      <Routes>
        <Route  path='/search' element= { <SearchPage />} />
        <Route  path='/' element= {<Home />} />

      </Routes>
      <Footer />
      
    {/* {/* <Banner /> */}
    {/* <Card /> */}
    {/* <Footer /> */}
    </div>
  );
}

export default App;
