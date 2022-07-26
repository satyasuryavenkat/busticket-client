
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Book from './components/Book/Book';
import Ticket from './components/Ticket/Ticket';

const App = () => {
  const isUserLoggedIn = useSelector((state) => state.users.isUserLoggedIn);
  const busName = useSelector((state) => state.users.busName);
  console.log(busName);
  
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
                <Route
                    path="/book"
                    element={ <Book /> }
                />
                <Route
                    path="/ticket"
                    element={ <Ticket/>}
                />
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
