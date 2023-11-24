import React from 'react';
import './App.css';
import Head from './Components/Head';
import SwipeableTemporaryDrawer from './Components/Sidebar';
import Addon from './Pages/Addon';
import Dashboard from './Pages/Dashboard';
import Faq from './Pages/Faq';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='main'>
      <Router>
        <div>
          <SwipeableTemporaryDrawer className='side'>
          </SwipeableTemporaryDrawer>

          <div className="container-fluid">
            <div className="row">
              <div className="col-9">

                <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/Addon' element={<Addon />} />
                  <Route path='/Faq' element={<Faq />} />
                  <Route path='/Perk' element={<Dashboard />} />
                  <Route path='/Support' element={<Dashboard />} />
                </Routes>
              </div>

              <div className="col-3">

                <Head className='head' />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
