import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router";
import { HiMiniBars3 } from "react-icons/hi2";
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "../Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
function Courses({courses}: { courses: any[]; }) {
    const [showFunctions, setShowFunctions] = useState(true);
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    const toggleFunctions = () => {
        setShowFunctions(!showFunctions);
    }
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="ms-3 mt-3">
                    <span style={{ fontSize: "30px", color: "red" }}>
                        <button style={{ border: "transparent", backgroundColor: "transparent", color: "red" }}
                            onClick={toggleFunctions}><HiMiniBars3 className="me-3" /></button>
                        {course?.name} {course?.number}
                        <span style={{ fontWeight: "normal", fontSize: "25px", color: "black" }}> 〉{pathname.split('/')[4]}</span>
                    </span>
                    <hr />
                </div>
            </div>
            <div className="d-lg-none mb-5">
                <nav style={{
                    color: "white", backgroundColor: "black", fontSize: "25px",
                    height: "80px", display: "flex", alignItems: "center"
                }}>
                    <button style={{ border: "transparent", backgroundColor: "transparent", color: "white"}}
                        onClick={toggleFunctions}><HiMiniBars3/></button>
                    <span style={{ textAlign: "center", flexGrow: 1, margin: 0 }}>
                        {course?.name} {course?.number} <br />
                        {pathname.split('/')[4]}</span>
                </nav>
            </div>
            <div className="d-flex">
                {showFunctions && (
                    <span><CourseNavigation /></span>
                )}
                <div style={{ flexGrow: 1 }}>
                    <div className="overflow-y-scroll positio-fixed bottom-0 end-0"
                        style={{ left: "320px", top: "50px" }}>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="Grades" element={<Grades />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                            <Route path="People" element={<h1>People</h1>} />
                            <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
                            <Route path="Credentials" element={<h1>Credentials</h1>} />
                            <Route path="Progress Reports (EAB Navigation)" element={<h1>Progress Reports</h1>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Courses;