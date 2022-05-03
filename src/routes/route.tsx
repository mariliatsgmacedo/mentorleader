import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NewMentor } from "../pages/NewMentor";

import { PrivateRoute } from "./privateRoute";

export const GeneralRoutes = () => {

    return (

            <div style={{paddingBottom: 50, }}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element = {
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } />
                    <Route path="/new-mentor" element={<NewMentor />} />
                </Routes>
            </div>

    )
}