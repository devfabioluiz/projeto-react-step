import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/aula10/Home";
import Login from "./components/aula10/Login";
import About from "./components/aula10/About";
import Contact from "./components/aula10/Contact";
import User from "./components/aula10/User";
import PrivateRoute from "./components/aula10/PrivateRoute";
import Dashboard from "./components/aula10/Dashboard";
import Profile from "./components/aula10/Profile";
import Settings from "./components/aula10/Settings";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/user/:id" element={<User />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
