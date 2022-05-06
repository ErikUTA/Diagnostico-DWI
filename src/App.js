import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/pages/home/home';
import Donuts from './components/pages/donuts/donuts';
import Tea from './components/pages/tea/tea';
import Coffee from './components/pages/coffee/coffe';

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
