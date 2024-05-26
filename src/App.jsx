import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Admin/Dashboard";
import Transaction from "./views/Admin/Transaction";
import MainLayout from "./layouts/MainLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./views/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
        </Route>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
