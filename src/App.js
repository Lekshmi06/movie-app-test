
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Popualar from './pages/Popualar';
import Toprated from './pages/Toprated';
import Sidebar from './pages/Sidebar';
import SglMovie from './pages/SglMovie';
import Browse from './pages/Browse';

function App() {
  // const[data,setData] = useState("")

  
  return (
   
     
     <BrowserRouter>
     <div className='flex'>
     <Sidebar/>
     <Routes>
      {/* <Route element = {<Sidebar />}  > */}
         <Route index element = {<Home />}/>
         <Route path = "/trending" element = {<Trending/>} />
         <Route path = "/popular" element = {<Popualar/>} />
         <Route path = "/toprated" element = {<Toprated/>} />
         <Route path = "/sglmovie" element = {<SglMovie/>} />
         <Route path = "/browse" element = {<Browse/>} />
       {/* </Route> */}
     </Routes>
     </div>
     </BrowserRouter>
     
    

  );
}

export default App;
