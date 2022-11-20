import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
