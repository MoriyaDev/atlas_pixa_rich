import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AppContext } from '../context/context';
import About from './About';
import Home from './Home';
import Counter from './Counter';
import Counter2 from './Counter2';
import Atlas from './atlas/Atlas';
import Pixa from './pixa/Pixa';
import './AppRoutes.css'; // קובץ CSS חיצוני
import Rich from './rich/Rich';

const AppRoutes = () => {
  const [number, setNumber] = useState(33);
  const [coins, setCoins] = useState(6);
  const [counter, setCounter] = useState(0);

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{ val: "koko2", number, setNumber, coins, setCoins, counter, setCounter }}
      >
        {/* Header */}
        <header className="app-header">
          <div className="coins-display">Coins: {coins}</div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/counter2">Counter2</Link>
            <Link to="/atlas">Atlas</Link>
            <Link to="/pixa/carts">Pixa</Link>
            <Link to="/rich">Rich</Link>
          </nav>
        </header>

        {/* Routes */}
        <main className="app-main">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/counter2" element={<Counter2 />} />
            <Route path="/atlas" element={<Atlas />} />
            <Route path="/rich" element={<Rich />} />
            <Route path="/pixa/carts" element={<Pixa />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          Footer Content
        </footer>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default AppRoutes;
