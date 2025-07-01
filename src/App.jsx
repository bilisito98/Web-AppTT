import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Info from './components/Info';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';


const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ marginLeft: '220px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/información" element={<Info />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profiledetails" element={<ProfileDetails />} />
            <Route path="/profilesettings" element={<ProfileSettings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;