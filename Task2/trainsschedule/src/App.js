
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTrains from './Componets/AllTrains';
import SpecificTrain from './Componets/SpecificTrain';
import Navbar from './Navbar/Navbar';


function App() {
  return (
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<AllTrains/>} />
            <Route path="/train/:id" element={<SpecificTrain/>} />
          </Routes>
      </Router>
        
      </>
  );
}

export default App;
