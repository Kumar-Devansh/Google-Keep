import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Archive from './pages/Archive';
import Trash from './pages/Trash';
import Labels from './pages/Labels';
import AuthProvider from './context/AuthContext';
import NoteProvider from './context/NoteContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <NoteProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
              path='/dashboard'
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path='/archive'
              element={
                <ProtectedRoute>
                  <Archive />
                </ProtectedRoute>
              }
            />
            <Route
              path='/trash'
              element={
                <ProtectedRoute>
                  <Trash />
                </ProtectedRoute>
              }
            />
            <Route
              path='/labels'
              element={
                <ProtectedRoute>
                  <Labels />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </NoteProvider>
    </AuthProvider>
  );
}

export default App;
