import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Header/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Shop from './components/Shop';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Shop />}/>
        <Route path='/' element={<About />}/>
        <Route path='/' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
