import React, { useState } from "react";
import data from "../utils/Data.json";
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
    <div>
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

      {display.map((d, index) => (
        <div key={index}>
          <div>
            <p style={{ color: "red" }}> {d.categoryName}</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "30%  30% 30%",
                gap: 12,
              }}
            >
              {d.widgtes == null
                ? null
                : d.widgtes.map((wid, index) => (
                    <div
                      className="widget"
                      key={index}
                      style={{ border: "1px solid black", height: "100px" }}
                    >
                      {" "}
                      <p>{wid}</p>
                      <button onClick={() => fndelete(d.categoryName, index)}>
                        delete
                      </button>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Body;
