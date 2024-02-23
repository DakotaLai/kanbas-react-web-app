import { FaBan, FaCheckCircle, FaFileImport, FaChartArea, FaRegBell, FaCalendarAlt } from "react-icons/fa";
import { TbPackageExport } from "react-icons/tb";
import { MdOutlineAddHome } from "react-icons/md";
import { CiBullhorn } from "react-icons/ci";
import { BsCalendar2Date } from "react-icons/bs";

function Status() {
    return (
        <>
            <div className="me-3">
                <h4>Course Status</h4>
                <div className="buttons-display">
                    <button style={{ minWidth: "120px" }}><FaBan className="me-2" /> Unpublish</button>
                    <button style={{ color: "white", backgroundColor: "green" }}>
                        <FaCheckCircle className="me-2" /> Publish</button>
                </div>
                <ul className="list-group mt-3">
                    <a href="">
                        <li className="list-group-item">
                            <FaFileImport className="me-2" />
                            Import Existing Content
                        </li>
                    </a>

                    <a href="">
                        <li className="list-group-item">
                            <TbPackageExport className="me-2" />
                            Import From Commons
                        </li>
                    </a>

                    <a href="">
                        <li className="list-group-item">
                            <MdOutlineAddHome className="me-2" />
                            Choose Home Page
                        </li>
                    </a>

                    <a href="">
                        <li className="list-group-item">
                            <FaChartArea className="me-2" />
                            View Course Stream
                        </li>
                    </a>
                    <a href="">
                        <li className="list-group-item">
                            <CiBullhorn className="me-2" />
                            New Announcement
                        </li>
                    </a>
                    <a href="">
                        <li className="list-group-item">
                            <FaChartArea className="me-2" />
                            New Analytics
                        </li>
                    </a>
                    <a href="">
                        <li className="list-group-item">
                            <FaRegBell className="me-2" />
                            View Course Notifications
                        </li>
                    </a>
                </ul>
                <div className="mt-3">
                    <a className="float-end" style={{ display: "flex", flexDirection: "row-reverse" }} href="">
                        <span className="title">
                            <i className="fa fa-calendar" style={{ color: "black" }}></i>
                            <FaCalendarAlt className="me-2" />
                            View Calendar
                        </span>
                    </a>

                    <h4>Comming Up</h4>
                    <hr />
                </div>
                <ul className="list-group">
                    <a className="list-group-item" style={{ border: "0" }} href="">
                        <li> <BsCalendar2Date className="me-2" />
                            <span className="title">
                                Lecture <br /></span>
                            <span>CS4550.12631.202410 <br /></span>
                            Sep 7 at 11:45am
                        </li>
                    </a>
                    <a className="list-group-item" style={{ border: "0" }} href="">
                        <li><BsCalendar2Date className="me-2" /> <span className="title"> CS5610 06 SP23 Lecture <br /></span>
                            <span>CS5610.12631.202310 <br /></span>
                            Sep 11 at 11:45am
                        </li >
                    </a >
                    <a className="list-group-item" style={{ border: "0" }} href="">
                        <li><BsCalendar2Date className="me-2" /> <span className="title">CS4550 Web Development Summer 1 2023 - Lecture <br /></span>
                            <span>CS4550.12631.202410 <br /></span>
                            Sep 7 at 6:00pm
                        </li >
                    </a >
                </ul >
            </div >
        </>
    );
}
export default Status;