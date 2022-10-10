
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/news' element={<News></News>}></Route>
      </Routes>
    </div>
  );
}

export default App;
