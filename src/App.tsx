import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AnimalsSelect } from './components/AnimalsSelect';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { ShowAnimal } from './components/ShowAnimal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='/animals' element={<AnimalsSelect/>}></Route>
          <Route path='/animal/:id' element={<ShowAnimal/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
