
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

import { PrivateRoute } from "./privateRoute";

export const GeneralRoutes = () => {

    return (

        <Router>
            <div style={{paddingBottom: 50, }}>
                <Routes>
                    <Route path="/" element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>

    )
}