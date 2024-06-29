import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRouter from './utils/ProtectedRouter';
import { AuthProvider } from './utils/AuthContext';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <>
   <Provider store={store}>
      <Router>
        <AuthProvider>
        <Header />
        
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRouter />}>
            
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </Provider>
      </>
  );
}

export default App;
