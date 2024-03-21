import React, { useState } from "react";
import "./index.css";
import { modules } from "../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../store";

import Dropdown from "rsuite/esm/Dropdown";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  // const [moduleList, setModuleList] = useState<any[]>(modules);
  // const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string;
  }
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  //   _id: "",
  // });
  // const addModule = (module: any) => {
  //   const newModule = {
  //     ...module,
  //     _id: new Date().getTime().toString()
  //   };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };

  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId);
  //   setModuleList(newModuleList);
  // };

  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };


  return (
    <>
      <div style={{ display: "flex" }} className="me-5">
        <div className="buttons-display">
          <button className="wd-buttons me-2">Collapse All</button>
          <button className="wd-buttons me-2">View Progress</button>
          <button className="wd-buttons me-2"
            onClick={() => "/"}>
            <FaCheckCircle className="text-success me-2" style={{ color: "green" }} />
            Publish All
            <IoMdArrowDropdown className="ms-2" />
          </button>
          {/* <Dropdown className="wd-buttons me-2"
                            icon={<FaCheckCircle className="text-success" style={{color:"green"}}/>}
                            title={"Publish All"} >
                            </Dropdown> */}
          <button className="wd-buttons selected me-2">
            <span style={{ fontSize: "x-large" }}>+</span> Module</button>
          <button className="wd-buttons">
            <FaEllipsisV className="ms-2" />
          </button>
        </div>
      </div>
      <hr className="ms-5 me-5" />
      <ul className="list-group wd-modules ms-5 me-5">
        <li className="list-group-item">
          <input className="form-control"  value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea className="form-control"  value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button  onClick={() => dispatch(updateModule({ ...module, course: courseId }))}>
            Update
          </button>
        </li>
      </ul>
      {moduleList.filter((module) => module.course === courseId)
        .map((module, index) => (
          /*List of items */
          <ul key={index}
            className="list-group mb-5 ms-5 me-5 wd-module"
            onClick={() => setSelectedModule(module)}>
            <li className="list-group-item" style={{ backgroundColor: "#f5f5f5" }}>
              <div className="mb-3 mt-3">
                <FaEllipsisV className="me-2" />
                <IoMdArrowDropdown className="me-2" />
                {module.name}
                <span className="float-end">

                  <FaCheckCircle className="text-success" />
                  <IoMdArrowDropdown className="me-2" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                  <button
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>
                  <button
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                </span>
              </div>
            </li>
            {selectedModule._id === module._id && (
              <ul className="list-group wd-module">
                {module.lessons?.map((lesson: Lesson, index: number) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        ))}
    </>
  );
}
export default ModuleList;