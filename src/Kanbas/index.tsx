import KanbasNavigation from "./Navigation";
import SmallScreen from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
function Kanbas() {
    return (
        <div className="d-flex">
            <div className="d-none d-lg-block" style={{ margin: "inherit" }}>
                <KanbasNavigation />
            </div>
            <div style={{ flexGrow: 1 }}>
                <div className="flex-fill">
                    <div className="p-4">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Account" element={<h1>Account</h1>} />
                            <Route path="Dashboard" element={<Dashboard />} />
                            <Route path="Courses" element={<Dashboard />} />
                            <Route path="Courses/:courseId/*" element={<Courses />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Kanbas;