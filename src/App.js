
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const isUserLoggedIn = useSelector((state) => state.users.isUserLoggedIn);
  
  return (
    // <Login/>
    <>
    <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={ isUserLoggedIn ? <Home /> : <Login/> }
                />
                {/* The next line is very important for the Navigate component to work */}
                {/* <Route
                    path="/home"
                    element={ <Home /> }
                /> */}
                {/* <Route
                    path="/redirect"
                    element={ <Navigate to="/error-page" /> }
                /> */}
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
