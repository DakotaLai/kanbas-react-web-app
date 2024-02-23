import { useNavigate, useParams, Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { assignments } from "../../../Database";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";
import React, { useState } from 'react';
function AssignmentEditor() {
  const [showFunctions, setShowFunctions] = useState(false);
  const toggleFunctions = () => {
    setShowFunctions(!showFunctions);
  }
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
    console.log("Actually cancelling edit assignmen.");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="mb-3 mt-5 me-4" style={{ display: "flex" }}>
        <div style={{ marginLeft: "auto" }}>
          <i className="fa fa-check-circle text-success"></i>
          <span style={{ color: "green" }} className="me-4"><b>Published</b></span>
          <button onClick={toggleFunctions}><FaEllipsisV /></button>
          {showFunctions && (
            <ul>
              <li>Edit</li>
              <li>SpeedGrader</li>
              <li>Duplicate</li>
              <li>Delete</li>
              <li>Move to...</li>
              <li>Send To...</li>
              <li>Copy To...</li>
              <li>Share to Commons</li>
            </ul>
          )}
        </div>
      </div>
      <hr />
      <div>
        <h2>Assignment Name</h2>
        <input value={assignment?.title}
          className="form-control mb-2" />
        <div className="mb-4">
          <textarea className="form-control" id="assignment-description">This is the assignment description.
          </textarea>
        </div>
        <div className="container-sm mb-4">
          <div className="row row-cols-sm-12">
            <div className="col-sm-3">
              <label id="points">Points </label>
            </div>
            <div className="col-sm-9">
              <input id="points" value="100" className="form-control" />
            </div>
            <div className="mb-4"></div>
            <div className="col-sm-3">
              <label id="assignment-group">Assignment Group </label>
            </div>
            <div className="col-sm-9">
              <button id="assignment-group" className="form-button">
                <option>Assignments</option>
              </button>
            </div>
            <div className="mb-4"></div>
            <div className="col-sm-3">
              <label id="display-grade">Display Grade as </label>
            </div>
            <div className="col-sm-9">
              <button id="display-grade" className="form-button">
                <option>Percentage</option>
              </button>
            </div>
            <div className="mb-4"></div>
            <div className="col-sm-3"></div>
            <div className="col-sm-9">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  value="grade-option"
                  name="count-grade"
                  id="chkbox-grade-count"
                />
                <label id="chkbox-grade-count" className="ms-3">
                  Do not count this assignment towards the final grade</label>
              </div>

            </div>
            <div className="mb-4"></div>
            <div className="col-sm-3">
              <label id="submission">Submission Type </label>
            </div>
            <div className="col-sm-9">
              <button id="submission" className="form-button">
                <option>Online</option>
              </button>
            </div>
            <div className="mb-4"></div>
            <div className="col-sm-2"></div>
            <div className="col-sm-3">
              <label id="points">Online Entry Options</label>
            </div>
            <div className="col-sm-7">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  value="text-entry"
                  name="check-submission"
                  id="chkbox-text-entry"
                />
                <label id="chkbox-text-entry" className="ms-3">Text Entry</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  value="web-url"
                  name="check-submission"
                  id="chkbox-web-url"
                />
                <label id="chkbox-web-url" className="ms-3">Website URL</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  value="media-recordings"
                  name="check-submission"
                  id="chkbox-media-recordings"
                />
                <label id="chkbox-media-recordings" className="ms-3">Media Recordings</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  value="student-annotation"
                  name="check-submission"
                  id="chkbox-student-annotation"
                />
                <label id="chkbox-student-annotation" className="ms-3">Student Annotation</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  value="file-upload"
                  name="check-submission"
                  id="chkbox-file-upload"
                />
                <label id="chkbox-file-upload" className="ms-3">File Uploads</label>
              </div>
            </div>
            <div className="mb-4"></div>
            <div className="col-sm-3" style={{ alignItems: "normal" }}>
              <label>Assign</label>
            </div>
            <div className="col-sm-9">

              <div style={{ border: '1px solid #c7cdd1', padding: '0%' }} className="form-control">
                <div className="mb-4 ms-3 me-3">
                  <label id="assign-to"><h6><b>Assign to </b></h6></label>
                  <button className="dropdown_box ms-3" id="assign-to">Everyone <IoMdArrowDropdown /></button>
                </div>
                <div className="mb-4 ms-3 me-3">
                  <label id="due-date"><h6><b>Due</b></h6></label>
                  <input type="date" className="form-control" id="due-date" />
                </div>
                <div className="row mb-5 ms-2 me-2">
                  <div className="col-sm-6">
                    <label id="available-from"><h6><b>Available from</b></h6></label>
                    <input type="date" className="form-control" id="available-from" />
                  </div>
                  <div className="col-sm-6">
                    <label id="until"><h6><b>Until</b></h6></label>
                    <input type="date" className="form-control" id="until" />
                  </div>
                </div>
                <div>
                  <button type="submit" className="btn" style={{ width: '100%', borderRadius: ' 0%', backgroundColor: '#f5f5f5' }} >+ Add</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="form-control mt-5 mb-5 me-5" style={{ borderRadius: '0%' }}>
          <div className="form-check-inline mb-3">
            <input
              type="checkbox"
              value="text-entry"
              name="check-notify-user"
              id="chkbox-notify-user"
            />
            <label id="chkbox-notify-user" className="ms-3">Notify users that this content has changed.</label>
          </div>
          <div style={{ display: 'flex', textAlign: 'center' }}>
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
              Save
            </button>

            <button onClick={handleCancel} className="btn btn-danger float-end ms-2">
              Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
export default AssignmentEditor;