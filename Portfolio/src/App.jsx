import './App.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation';

function App() {

  return (
    <>
    <Nav />
    <main className="mx-3">
      <Outlet />
    </main>
  </>
);
}

export default App;
