import { Link } from "react-router-dom";
import { courses } from "../Database";
import { HiMiniBars3 } from "react-icons/hi2";
function Dashboard() {
  return (
    <div className="p-4">
      <div className="d-none d-lg-block">
        <h1>Dashboard</h1><hr />
      </div>
      <div className="d-lg-none mb-5">
        <nav style={{ color: "white", backgroundColor: "black", height: "80px", display: "flex", alignItems: "center" }}>
          <div style={{ marginLeft: "20px", marginRight: "auto" }}>
            <h1 style={{ textAlign: "left" }}><HiMiniBars3 /></h1>
          </div>
          <h1 style={{ textAlign: "center", flexGrow: 1, margin: 0 }}>
            Dashboard</h1>
        </nav>
      </div>


      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={require(`./images/${course.image}`)} className="card-img-top"
                  style={{ height: 150 }} />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text">{course.number} <br />{course.startDate}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;