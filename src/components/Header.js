import { LuBellRing } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";

const Header=(props)=>{
const{searchInput,search}=props;
    return(
        <div id="header">
        <div>
          <p  id="headerHeading">
            Home {">"} <strong>Dashboard V2</strong>{" "}
          </p>
        </div>
        <div id="searchbox">
          <input
            id="searchinput"
            type="text"
            placeholder=" 🔍︎ Search Anything"
            value={searchInput}
            onChange={(e) => search(e)}
          ></input>
          <LuBellRing />
           <p> <MdAccountCircle />Admin</p>
        </div>
      </div>
    )
}
export default Header;