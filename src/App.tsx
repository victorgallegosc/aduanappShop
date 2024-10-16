import './App.css';
import './assets/fonts/fonts.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AduanappServices from './components/AduanappServices';
import PackDetails from './pages/PackDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AduanappServices />} />
          <Route path="/details" element={<PackDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
