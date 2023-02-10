import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Price from './components/Price';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/pricing' element={<Price />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
