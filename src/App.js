import Header from './components/Header';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { useState, useEffect } from 'react';

function App() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem('theme')) || false;
  };

  const [darkMode, setDarkMode] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="dark:bg-gray-900">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Introduction />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
