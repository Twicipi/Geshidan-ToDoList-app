
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from '../Pages/WelcomePage';
import MainPage from '../Pages/MainPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/todos' element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
