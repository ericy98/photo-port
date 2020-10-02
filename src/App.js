import React from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Gallery from './components/Gallery';

import './App.css';
function App() {
  return (
    // JSX similar to document.createElement()
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;