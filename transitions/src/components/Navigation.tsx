// import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SlamDunk from './SlamDunk';
import Transition from './Transition'; // Import the AnimatedRouteTransition component
import DragonBall from './DragonBall';
import { AnimatePresence } from 'framer-motion';
import Akira from './Akira';
import Dorohedoro from './Dorohedoro';
import OnePiece from './OnePiece';
import Home from './Home';

function Navigation() {
  return (
    <AnimatePresence mode='wait'>
      <Router>
      <div>
        <nav className="w-full h-auto fixed flex justify-end bg-white ">
          <ul className="w-5/12 flex ml-8">
            <li className="flex-auto p-4">
              <Link to="/slamdunk" className="transition-text duration-300 hover:text-red font-semibold text-lg">
                Slam Dunk
              </Link>
            </li>
            <li className="flex-auto p-4">
              <Link to="/dragonball" className="transition-text duration-300 hover:text-red font-semibold text-lg">
                Dragon Ball
              </Link>
            </li>
            <li className="flex-auto p-4">
              <Link to="/akira" className="transition-text duration-300 hover:text-red font-semibold text-lg">
                Akira
              </Link>
            </li>
            <li className="flex-auto p-4">
              <Link to="/dorohedoro" className="transition-text duration-300 hover:text-red font-semibold text-lg">
                Dorohedoro
              </Link>
            </li>
            <li className="flex-auto p-4">
              <Link to="/onepiece" className="transition-text duration-300 hover:text-red font-semibold text-lg">
                One Piece
              </Link>
            </li>
            {/* Add more navigation links for other routes */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slamdunk" element={<Transition><SlamDunk /></Transition>} />
          <Route path="/dragonball" element={<Transition><DragonBall /></Transition>} />
          <Route path="/akira" element={<Transition><Akira /></Transition>} />
          <Route path="/dorohedoro" element={<Transition><Dorohedoro /></Transition>} />
          <Route path="/onepiece" element={<Transition><OnePiece /></Transition>} />
          {/* Add more routes for other components */}
        </Routes>

      </div>
    </Router>
    </AnimatePresence>
  );
}

export default Navigation;
