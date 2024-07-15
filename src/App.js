import './App.css';
import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Facteur from './pages/Facteur';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Acceuil from './components/Acceuil';
import SignUp from './components/Sign';
import Connection from './components/Login';


function App() {

  const Layout = () => {
    return(
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
    )
  }
  return (
    
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Acceuil/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/facteur' element={<Facteur/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Connection />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
