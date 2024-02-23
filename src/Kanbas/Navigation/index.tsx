import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaSignOutAlt} from "react-icons/fa";
import { HiOutlineInboxIn } from "react-icons/hi";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { PiPresentationBold } from "react-icons/pi";
import { LuHelpCircle } from "react-icons/lu";

function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <HiOutlineInboxIn className="fs-2"/>},
    { label: "History",  icon: <MdOutlineHistoryToggleOff className="fs-2"/>},
    { label: "Studio",  icon: <PiPresentationBold className="fs-2"/>},
    { label: "Commons",  icon: <FaSignOutAlt className="fs-2"/>},
    { label: "Help",  icon: <LuHelpCircle className="fs-2"/>},
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <h1 style={{textAlign:"center", color: "red", fontSize:"80px", fontWeight: "bolder"}}>N</h1>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;