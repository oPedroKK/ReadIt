import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/ReadIt" element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes;