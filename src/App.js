import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import PrivateRoute from './components/router/PrivateRoute';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<div>Not Found</div>} />
          <Route
            path="/home"
            element={<PrivateRoute component={Home} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
