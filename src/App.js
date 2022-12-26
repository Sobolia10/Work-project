import { Navigate, Route, Routes } from "react-router-dom";
import UsersTemplate from "./Templates/UsersTemplate";
import LayoutPage from "./Pages/LayoutPage";
import DescriptionTemplate from "./Templates/DescriptionTemplate";
import ErrorPage from "./Pages/ErrorPage";
import FavoritesTemplate from "./Templates/FavoritesTemplate";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />} >
          <Route path="/" element={<LoginPage />} />
          <Route path="/users" element={<UsersTemplate />} />
          <Route path="/description" element={<DescriptionTemplate />} />
          <Route path="/favorites" element={<FavoritesTemplate />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route path="*" element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
