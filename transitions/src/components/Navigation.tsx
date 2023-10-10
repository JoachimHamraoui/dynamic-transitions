// import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Transition from './Transition'; // Import the AnimatedRouteTransition component
import Web from './Web';
import { AnimatePresence } from 'framer-motion';

function Navigation() {
  return (
    <AnimatePresence mode='wait'>
      <Router>
      <div>
        <nav className="w-full h-auto fixed flex justify-end">
          <ul className="w-1/4 flex ml-8">
            <li className="flex-auto p-4">
              <Link to="/" className="transition-text duration-300 hover:text-red font-semibold text-lg">
                Slam Dunk
              </Link>
            </li>
            <li className="flex-auto p-4">
              <Link to="/web" className="transition-text duration-300 hover:text-red font-semibold text-lg">
                Dragon Ball
              </Link>
            </li>
            <li className="flex-auto p-4">
              <Link to="/web" className="transition-text duration-300 hover:text-red font-semibold text-lg">
                Akira
              </Link>
            </li>
            {/* Add more navigation links for other routes */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Transition><Home /></Transition>} />
          <Route path="/web" element={<Transition><Web /></Transition>} />
          {/* Add more routes for other components */}
        </Routes>

      </div>
    </Router>
    </AnimatePresence>
  );
}

export default Navigation;
