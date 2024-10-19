import './App.css';
import './assets/fonts/fonts.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AduanappServices from './components/AduanappServices';
import Pack1Details from './pages/PackDetails/pack1/pack1';
import Pack2Details from './pages/PackDetails/pack2/pack2';
import Pack3Details from './pages/PackDetails/pack3/pack3';
import Pack4Details from './pages/PackDetails/pack4/pack4';
import Pack5Details from './pages/PackDetails/pack5/pack5';
import Pack6Details from './pages/PackDetails/pack6/pack6';
import Pack7Details from './pages/PackDetails/pack7/pack7';
import Pack8Details from './pages/PackDetails/pack8/pack8';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InformationPortal from './components/InformationPortal/index';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<AduanappServices />} />
                    <Route path="/information-portal" element={<InformationPortal />} />
                    <Route path="/details1" element={<Pack1Details />} />
                    <Route path="/details2" element={<Pack2Details />} />
                    <Route path="/details3" element={<Pack3Details />} />
                    <Route path="/details4" element={<Pack4Details />} />
                    <Route path="/details5" element={<Pack5Details />} />
                    <Route path="/details6" element={<Pack6Details />} />
                    <Route path="/details7" element={<Pack7Details />} />
                    <Route path="/details8" element={<Pack8Details />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
