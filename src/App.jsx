import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import PizzaOrder from './pages/pizzaOrder';
import Success from './pages/Success';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<PizzaOrder />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>


  );
}

export default App;
