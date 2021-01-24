import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import BooksDetails from './components/BooksDetails';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BooksDetails />
    </div>
  );
}

export default App;
