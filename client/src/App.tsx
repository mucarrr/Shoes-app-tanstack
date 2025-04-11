import { FC } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Protected from "./components/protected";
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Edit from "./pages/edit/Edit";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Protected />}>
          <Route index element={<Home />} />
          <Route path="shoe/:id" element={<Detail />} />
        </Route>

        <Route path="/admin" element={<Protected allowedRoles={["admin"]} />}>
          <Route index element={<Dashboard />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
