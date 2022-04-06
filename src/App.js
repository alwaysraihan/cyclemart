import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NotFound from './components/notFoundPage/NotFound';
import Reviews from './components/reviews/Reviews';
import Blog from './components/blog/Blog';


function App() {

  
  return (
   <>
   <Header/>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/reviews' element={<Reviews/>} />
     <Route path='/blog' element={<Blog/>} />
     <Route path='/dashboard' element={<Dashboard/>} />
     <Route path='*' element={<NotFound/>} />
   </Routes>
   </>

  );
}

export default App;
