import { Routes, Route } from "react-router-dom";
import { Home, Homepage, Login, TourDN, Vehicle } from "./containers/Public";
import { path } from "./ultils/constant";
function App() {
  return (
    <div className="bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<Homepage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.DAT_TOUR} element={<TourDN />} />
          <Route path={path.DI_CHUYEN} element={<Vehicle />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
