import React, { useState } from "react";
import data from "../utils/Data.json";
import { LuBellRing } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";
const Body = () => {
  const [category, setcategory] = useState("");
  const [display, setdisplay] = useState(data);
  const [wid, setwid] = useState("");
  const [cate, setcate] = useState("");

  function categoryadd(cat) {
    let a = {};
    a.categoryName = cat;
    setdisplay((prevdisplay) => [...prevdisplay, a]);
  }
  function addwidget() {
    let foundcate = display.filter((dis) => dis.categoryName === cate);
    if (foundcate[0].widgtes == null) {
      foundcate[0].widgtes = [];
      foundcate[0].widgtes.push(wid);
    } else {
      foundcate[0].widgtes.push(wid);
    }
    let repl = foundcate[0];

    setdisplay((prevdisplay) =>
      prevdisplay.map((user) =>
        user.categoryName === cate ? { ...user, repl } : user
      )
    );
  }
  function fndelete(category, index) {
    let foundcate = display.filter((dis) => dis.categoryName === category);
    foundcate[0].widgtes.splice(index, 1);

    let repl = foundcate[0];

    setdisplay((prevdisplay) =>
      prevdisplay.map((user) =>
        user.categoryName === category ? { ...user, repl } : user
      )
    );
  }

  return (
    <div id="main">
      <div id="header" style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>
            Home {">"} <strong>Dashboard V2</strong>{" "}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "85%",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            style={{ width: "40%" }}
            placeholder="Search Anything"
          ></input>
          <LuBellRing />
          <p>
            <MdAccountCircle /> Admin
          </p>
        </div>
      </div>

      <div id="dashboard">
        <div id="dashboardHeading">
          <div>
            <p>
              <strong>CNAPP Dashboard</strong>
            </p>
          </div>

          <div id="dashboardIcons">
            <button>Add Widget +</button>
            <button>
              <SlRefresh />
            </button>
            <button>
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
        <div id="dashboardLayout">
        {display.map((d, index) => (
          <div key={index}>
            <div>
              <p ><strong>{d.categoryName}</strong> </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "33%  33% 33%",
                  gap: 12,
                }}
              >
                {d.widgtes.map((wid, index) => (
                      <div
                        className="widget"
                        key={index}
                        style={{ height: "auto" ,backgroundColor:"white",borderRadius:"20px",padding:"10px" }}
                      >
                        {" "}
                        <p style={{margin:"0px",fontSize:"14px",maxHeight:"auto"}}>{wid}</p>

                        <img style={{padding:"10px",maxWidth:"100%",maxHeight:"auto", display: "block",objectFit:"cover"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrvZwiS8mHVedATgm-Mhmj9dHzuXBgzoVFA&s"></img>
                        
                        
                      </div>
                    ))}
              </div>
            </div>
          </div>
        ))}</div>
                <input
          type="text"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        ></input>
        <button onClick={() => categoryadd(category)}>Add category</button>

        <select id="fruits" onChange={(e) => setcate(e.target.value)}>
          {display.map((dis, index) => (
            <option key={index}>{dis.categoryName}</option>
          ))}
        </select>
        <input
          type="text"
          onChange={(e) => setwid(e.target.value)}
          value={wid}
        ></input>
        <input onClick={() => addwidget()} type="submit" value="Submit" />
      </div>
    </div>
  );
};
export default Body;
