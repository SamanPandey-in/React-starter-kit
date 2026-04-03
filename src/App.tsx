import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './features/auth/AuthContext';
import Header from './components/ui/Header';
import Landing from './features/landing/Landing';
import Login from './features/auth/pages/Login';
import Signup from './features/auth/pages/Singup';
import Dashboard from './features/dashboard/pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
