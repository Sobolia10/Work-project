import { Navigate, Route, Routes } from "react-router-dom";
import UsersTemplate from "./Templates/UsersTemplate";
import LayoutPage from "./Pages/LayoutPage";
import DescriptionTemplate from "./Templates/DescriptionTemplate";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <>
      <div>Another one</div>
      <Routes>
        <Route path="/" element={<LayoutPage />} >
          <Route path="/" element={<UsersTemplate />} />
          <Route path="/description" element={<DescriptionTemplate />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route path="*" element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
