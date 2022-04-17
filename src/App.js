import './Styles/styles.css'
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Q1 from './components/Q1';
import Q2 from './components/Q2';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Q1' element={<Q1/>}/>
          <Route path='/Q2/*' element={<Q2/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
