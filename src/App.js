import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import IncomeStatement from './Components/IncomeStatement';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/IncomeStatement" element={<IncomeStatement />} />
      </Routes>
    </div>
  );
}

export default App;
