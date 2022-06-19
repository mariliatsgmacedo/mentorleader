import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Mentors } from "../pages/Mentors";
import { Profile } from "../pages/Profile";


export const PrivateRoutes = () => {

    return (
        <div style={{ paddingBottom: 50, }}>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="mentors" element={<Mentors />} />
            </Routes>
        </div>

    )
}