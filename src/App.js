import { Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
