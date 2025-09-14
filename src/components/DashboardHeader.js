import { SlRefresh } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
function DashboardHeader({ setIsSidebarOpen, setModalIsOpen, setaddCategory }) {
  return (
    <div id="dashboardHeading">
      <div id="dashboardname">
        <p>
          <strong>CNAPP Dashboard</strong>
        </p>
      </div>

      <div id="dashboardIcons">
        <button
          onClick={() => {
            setModalIsOpen(true);
          }} style={{cursor:"pointer"}}
        >
          Add Widget +
        </button>
        <button onClick={() => setIsSidebarOpen(true)} style={{cursor:"pointer"}}>Manage Widgets</button>
        <button
          onClick={() => {
            setModalIsOpen(true);
            setaddCategory(true);
          }} style={{cursor:"pointer"}}
        >
          Add Category +
        </button>
        <button style={{cursor:"pointer"}}> 
          <SlRefresh style={{ verticalAlign: "middle" }} />
        </button>
        <button style={{cursor:"pointer"}}>
          <BsThreeDotsVertical style={{ verticalAlign: "middle" }} />
        </button>
        <button style={{ display: "flex", alignItems: "center" ,cursor:"pointer"}}>
          <FaClock /> ┊ last 2 days &nbsp;&nbsp; <FaChevronDown />
        </button>
      </div>
    </div>
  );
}
export default DashboardHeader;
