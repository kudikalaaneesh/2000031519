
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTrains from './Componets/AllTrains';
import SpecificTrain from './Componets/SpecificTrain';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="alltrains" element={<AllTrains/>} />
            <Route path="train/:id" element={<SpecificTrain/>} />
          </Routes>
      </Router>
        
      </>
  );
}

export default App;
