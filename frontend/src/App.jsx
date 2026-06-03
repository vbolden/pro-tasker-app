import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className='page-container'>
      <Sidebar />
      <div className='content-container'>
        <Header />
        <main className='main-content'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
