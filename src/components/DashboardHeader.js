import { SlRefresh } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
function DashboardHeader({setIsSidebarOpen,setModalIsOpen,setaddCategory}){
    return(
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
              }}
            >
              Add Widget +
            </button>
            <button onClick={() => setIsSidebarOpen(true)}>
              Manage Widgets
            </button>
            <button
              onClick={() => {
                setModalIsOpen(true);
                setaddCategory(true);
              }}
            >
              Add Category +
            </button>
            <button>
              <SlRefresh />
            </button>
            <button>
              <BsThreeDotsVertical />
            </button>
            <button>
                <FaClock /> ┊ last 2 days {"   "}<strong>🇻</strong>
            </button>
          </div>
        </div>
    )
}
export default DashboardHeader;