import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='page-container'>
      <Sidebar menuOpen={menuOpen} />

      {menuOpen && (
        <div
          className="backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className='content-container'>
        <Header setMenuOpen={setMenuOpen} />
        <main className='main-content'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
