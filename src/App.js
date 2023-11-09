import '../src/assets/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Componetns
import { Navbar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer'
// Pages
import { Home } from '../src/pages/home/home'

function App() {
  return (
    <>
      <><Navbar /></>

      <Routes path="/coffee-cup" element={Home}>
        <Route exact path='/coffee-cup' element={<Home />} />
      </Routes>

      <><Footer /></>
    </>
  );
}

export default App;
