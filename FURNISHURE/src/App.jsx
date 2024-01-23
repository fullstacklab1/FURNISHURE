import { useState } from 'react'
import './App.css';
import Logo from './Logo';


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState(['Option 1', 'Option 2', 'Option 3']);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option);
    setDropdownOptions([]); // Clear dropdown options when an option is selected
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {dropdownOptions.length > 0 && (
        <ul className="dropdown-options">
          {dropdownOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <SearchBar />
    </nav>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to My Website</h1>
      </header>
    </div>
  )
}

export default App
