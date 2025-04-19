import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="p-4 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className="text-white text-2xl font-bold"
        >
          MyLogo
        </button>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => navigate('/')}
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Home
            </button>
          </li>
          
          <li>
            <button
              onClick={() => navigate('/trends')}
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Trends
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/quiz')}
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Quiz
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate('/login')}
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
