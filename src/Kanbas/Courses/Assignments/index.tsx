import { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, Navigate, useParams } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";
import Modal from 'react-bootstrap/Modal';

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const [s, setShow] = useState<{ [key: string]: boolean }>({});
  const handleClose = () => setShow({});
  const handleShow = (assignmentId: any) => setShow({ ...s, [assignmentId]: true });
  return (
    <>
      {/* {<!-- Add buttons and other fields here -->} */}
      <ul className="list-group wd-modules ms-5 me-5">
        <li className="list-group-item">
          <FaEllipsisV className="me-2" />
          <IoMdArrowDropdown className="me-2" />ASSIGNMENTS
          <span className="float-end">
            <span style={{ border: "1px solid gray", padding: "5px" }} className="rounded me-3">40% of Total</span>
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}?isNewAssignment=true`}> <FaPlusCircle className="ms-2" style={{color: "red"}}/></Link><FaEllipsisV className="ms-2" />
          </span>
        </li>
        {/* <li className="list-group-item"> */}
        {/* <button
            onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}>
            Add
          </button> */}
        {/* <button
            onClick={() => dispatch(updateAssignment(assignment))}>
            Update
          </button> */}
        {/* <input
            value={assignment.title}
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, title: e.target.value }))
            } />
          <textarea
            value={assignment.description}
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, description: e.target.value }))
            } /> */}
        {/* </li> */}
        {assignmentList.filter((assignment) => assignment.course === courseId).map((assignment) => (
          <div style={{ borderLeft: '10px solid green' }} className="list-group-item">
            <li>
              <FaEllipsisV className="me-2" />
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
              <span className="float-end">
                <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}><button onClick={() => dispatch(setAssignment(assignment))}>
                    Edit
                  </button></Link>
                <button onClick={() => handleShow(assignment._id)}>
                  Delete
                </button>
              </span>
            </li>

            <Modal show={s[assignment._id] || false}
            autoFocus={true} centered>
              <Modal.Header>
                <Modal.Title className="alert alert-danger">Deletion</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Do you want to delete {assignment.title}?
              </Modal.Body>
              <Modal.Footer>
                <button onClick={() => dispatch(deleteAssignment(assignment._id))}>
                  Yes
                </button>
                <button onClick={handleClose}>
                  No
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        ))}
      </ul>
    </>
  );
}
export default Assignments;

