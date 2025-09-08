import React, { useState } from "react";
import data from "../utils/Data.json";
import { LuBellRing } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Modal from "react-modal";
Modal.setAppElement("#root");
const Body = () => {
  const [form, setform] = useState({
    categoryName: "",
    widgetName: "",
    widgetText: "",
  });
  const [searchInput, setsearchInput] = useState("");
  const [display, setdisplay] = useState(data);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [originalData, setoriginalData] = useState(data);

  function addWidget() {
    let tempCategory = originalData.filter(
      (category) => category.categoryName === form.categoryName
    );
    console.log(tempCategory[0]);
    let tempWidget = {};
    tempWidget.widgetName = form.widgetName;
    tempWidget.widgetText = form.widgetText;
    tempCategory[0].widgets.push(tempWidget);
    console.log(tempCategory);
    let updatedCategory = tempCategory[0];
    setoriginalData((prevoriginalData) =>
      prevoriginalData.map((category) =>
        category.categoryName === form.categoryName
          ? { ...category, updatedCategory }
          : category
      )
    );
    setdisplay(originalData);
  }
  function deleteWidget(categoryName, index) {
    let tempCategory = originalData.filter(
      (category) => category.categoryName === categoryName
    );

    tempCategory[0].widgets.splice(index, 1);
    let updatedCategory = tempCategory[0];
    setoriginalData((prevoriginalData) =>
      prevoriginalData.map((category) =>
        category.categoryName === form.categoryName
          ? { ...category, updatedCategory }
          : category
      )
    );
    setdisplay(originalData);
  }
  function search(e) {
    let searchValue = e.target.value.toLowerCase();
    setsearchInput(searchValue);
    let searchOutput = originalData
      .map((category) => {
        if (category.categoryName.toLowerCase().includes(searchValue)) {
          return category;
        }

        let matchedWidgets =category.widgets.filter((widget) =>
          widget.widgetName.toLowerCase().includes(searchValue)
        );
        if (matchedWidgets.length > 0) {
          return { ...category, widgets: matchedWidgets };
        }
        return null;
      })
      .filter(Boolean);
    setdisplay(searchOutput);
  }

  const formIsValid =
    form.widgetName !== "" && form.categoryName !== "Select Category";
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
            value={searchInput}
            onChange={(e) => search(e)}
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
            <button
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              Add Widget +
            </button>
            <button>
              <SlRefresh />
            </button>
            <button>
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
        <div id="dashboardLayout">
          {display.map((category, index) => (
            <div key={index}>
              <div>
                <p>
                  <strong>{category.categoryName}</strong>
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "33%  33% 33%",
                    gap: 12,
                  }}
                >
                  {category.widgets.map((widget, index) => (
                    <div className="widget" key={index}>
                      <button
                        className="removebtn"
                        onClick={() =>
                          deleteWidget(category.categoryName, index)
                        }
                      >
                        <RxCross2 color="red" />
                      </button>{" "}
                      <p
                        style={{
                          margin: "0px",
                          fontSize: "14px",
                          maxHeight: "auto",
                        }}
                      >
                        {widget.widgetName}
                      </p>
                      <p> {widget.widgetText}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={modalIsOpen}>
        <div>
          {" "}
          <RxCross2
            id="close-btn"
            onClick={() => setModalIsOpen(false)}
            style={{
              width: "20px",
              height: "20px",
              color: "red",
              cursor: "pointer",
              border: "1px solid red",
              borderRadius: "10px",
            }}
          />
        </div>
        <div
          id="modalBody"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <label htmlFor="formCategory">Select Category:</label>
          <select
            id="formCategory"
            value={form.categoryName}
            onChange={(e) => setform({ ...form, categoryName: e.target.value })}
          >
            <option>Select Category</option>
            {display.map((category, index) => (
              <option key={index}>{category.categoryName}</option>
            ))}
          </select>
          <label htmlFor="formWidget">Widget Name :</label>
          <input
            type="text"
            id="formWidget"
            value={form.widgetName}
            onChange={(e) => setform({ ...form, widgetName: e.target.value })}
          ></input>
          <label htmlFor="formWidgetText">Widget text :</label>
          <input
            type="text"
            id="formWidgetText"
            value={form.widgetText}
            onChange={(e) => setform({ ...form, widgetText: e.target.value })}
          ></input>

          <button
            disabled={!formIsValid}
            onClick={() => {
              addWidget();
              setModalIsOpen(false);
            }}
          >
            Add Widget
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default Body;
