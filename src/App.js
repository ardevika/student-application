
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import VieewStudent from './components/VieewStudent';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LiveNews from './components/LiveNews';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStudent />} />
        <Route path='/Search' element={<SearchStudent />} />
        <Route path='/Delete' element={<DeleteStudent />} />
        <Route path='/Vieew' element={<VieewStudent />} />
        <Route path='/News' element={<LiveNews/>}/>
        
      





      </Routes>
    </BrowserRouter>
  );
}

export default App;
