import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import "./index.css";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="ms-5 me-5">
            <div style={{ display: "flex" }} className="mb-3">
                <button className="p-0" style={{
                    border: "none",
                    backgroundColor: "transparent", color: "red", margin: "0px", fontSize: "24px"
                }}
                    onClick={() => "/"}>
                    Gradebook
                    <IoMdArrowDropdown className="ms-2" />
                </button>
                <div style={{ marginLeft: "auto" }}>
                    <button className="me-2" style={{ margin: "0px", fontSize: "24px" }}>
                        <FaFileImport className="ms-2" /> Import
                    </button>
                    <button className="me-2" onClick={() => "/"} style={{ margin: "0px", fontSize: "24px" }}>
                        <FaFileExport className="ms-2" />
                        Export
                        <IoMdArrowDropdown className="ms-2" />
                    </button>
                    <button className="me-2" style={{ margin: "0px", fontSize: "24px" }}><IoMdSettings /></button>
                </div>
            </div>
            <div className="row row-cols-sm-12 mb-4">
                <div className="col-sm-6">
                    <h5>Student Names</h5>
                    <form id="text-fields" className="form-select">
                        <CiSearch className="ms-2" />
                        <input id="text-fields-studentNames" placeholder="Search Students"
                            style={{ border: 'transparent', width: 'fit-content' }} />
                    </form>
                </div>
                <div className="col-sm-6">
                    <h5>Assignment Names</h5>
                    <form id="text-fields" className="form-select">
                        <CiSearch className="ms-2" />
                        <input id="text-fields-assignments" placeholder="Search Assignments"
                            style={{ border: "transparent", width: "fit-content" }} />
                    </form>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <tbody>
                    <tr>
                        <td>Student Name</td>
                        {as.map((assignment) => (
                            <th key={assignment._id}>{assignment.title}</th>
                        ))}
                        </tr>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr key={enrollment._id}>
                                   <td>{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        const g = grades.find(
                                            (g) => g.student === enrollment.user && g.assignment === assignment._id);
                                        return (<td key={assignment._id}>{g?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;
