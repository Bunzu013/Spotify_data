import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {userContext} from "./context/Context";
import {useContext} from "react";
import jwtDecode from "jwt-decode";
import Admin from "./pages/admin/Admin";


function App() {
  const {user, dispatch} = useContext(userContext);

  if(user !== null) {
    var token = user
    //decode token
    var decoded = jwtDecode(token)
    var isAdmin = decoded.isAdmin
  }


  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user? <Home /> : <Register />} />
        <Route path="/login" element={user? <Home /> : <Login />} />
        <Route path="/admin" element={isAdmin && user? <Admin /> : <Home />} />
      </Routes>
    </Router>
  );
}

export default App;
