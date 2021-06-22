import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import AppFooter from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <ColorPicker />
      <AppFooter/>
    </div>
  );
}

export default App;
