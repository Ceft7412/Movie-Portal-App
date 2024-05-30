import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//pages
import CardsContainer from "./views/pages/Dashboard";
import Movies from "./views/pages/Movies";
import MainLayout from "./layouts/MainLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./views/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/dashboard" element={<CardsContainer />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
      <Route element={<GuestLayout />}>
        <Route index element={<Login />} />
      </Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
