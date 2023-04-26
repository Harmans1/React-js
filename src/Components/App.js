import '../css/App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar';
import Index from '../pages/Index';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

  function App() {
    return (
      <div className='App'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    )
  }

export default App;
