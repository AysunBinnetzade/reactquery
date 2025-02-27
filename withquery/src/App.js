import logo from './logo.svg';
import './App.css';
import { ROUTER } from './roots';
import NavbarComponent, { NavbarComponents } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import CreateNewUser from './components/Forms/CreateNewUser';


const queryClient = new QueryClient()
function App() {
  return (
    
      <QueryClientProvider client={queryClient}>

  <BrowserRouter>
<NavbarComponent/>
    <ROUTER/>
  </BrowserRouter>
  </QueryClientProvider>
  

  );
};

export default App;
