import logo from './logo.svg';
import './App.css';
import { ROUTER } from './roots';
import NavbarComponent, { NavbarComponents } from './components/Navbar';

function App() {
  return (
    <>
<NavbarComponent/>
  <BrowserRouter>
    <ROUTER/>
  </BrowserRouter>
    </>
  );
};

export default App;
