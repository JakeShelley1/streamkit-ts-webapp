import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login isLogin={false} />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
};

export default App;
