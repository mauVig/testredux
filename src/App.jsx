import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './pages/Edit';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
