import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      {/* {<!-- Add buttons and other fields here -->} */}
      <ul className="list-group wd-modules ms-5 me-5">
        <li className="list-group-item">
            <FaEllipsisV className="me-2" /> 
            <IoMdArrowDropdown className="me-2" />ASSIGNMENTS
            <span className="float-end">
            <span style={{border: "1px solid gray", padding: "5px"}} className="rounded me-3">40% of Total</span>
            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
            </li>
            <div style={{borderLeft: '10px solid green'}}>
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
            </div>
      </ul>
    </>
);}
export default Assignments;

