import ModuleList from "../../Modules/List";
import Status from "./status";
function Home() {
  return (
    <div>
      {/* <h2>Home</h2> */}

      <div className="row row-cols-lg-2">
      <div className="col-lg-10">
      <ModuleList />
      </div>
        <div  className="col-lg-2">
        <Status />
        </div>
      
      </div>
      
      
    </div>
  );
}
export default Home;