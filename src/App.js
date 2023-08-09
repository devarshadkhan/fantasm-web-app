import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Mint from './Pages/Mint/Mint';
import Radeem from './Pages/Radeem/Radeem';
import Farm from './Pages/Farms/Farm.js';
import Staking from './Pages/Staking/Staking';
import Airdrop from './Pages/Airdrop/Airdrop';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mint" element={<Mint />}/>
        <Route path="/radeem" element={<Radeem />}/>
        <Route path="/farm" element={<Farm />}/>
        <Route path="/Staking" element={<Staking />}/>
        <Route path="/airdrop" element={<Airdrop />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
