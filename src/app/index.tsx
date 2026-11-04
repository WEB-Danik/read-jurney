import './styles/App.css';
import {AuthLayout} from "../pages/auth";
import {GeneralPage} from "../pages/home-page";
import {Routes, Route, Navigate} from "react-router-dom";
function App() {
  return (
    <>
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/sign-auth" replace />}
            />
            <Route
                path="/sign-auth"
                element={<AuthLayout />}
            />
            <Route
                path="/general_page"
                element={<GeneralPage />}
            />
        </Routes>
    </>
  )
}

export default App
