import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import authService from './appwrite/auth';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice';
import { Header, Footer } from './components/index';
// import { Outlet } from 'react-router-dom'; // Ensure this is imported

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]); // Added `dispatch` as a dependency

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          todo: 
          {/* TODO: <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
