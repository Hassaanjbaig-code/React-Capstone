import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import IncomeStatement from './Components/IncomeStatement';

function App() {
  return (
    <div>
      <h1>US Companies Stock Price</h1>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/IncomeStatement' element= {<IncomeStatement />} />
      </Routes>
    </div>
  );
}

export default App;
