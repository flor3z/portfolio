import Header from './components/Header';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
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
