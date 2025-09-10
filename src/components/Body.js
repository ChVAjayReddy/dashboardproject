import React, { useState } from "react";
import data from "../utils/Data.json";
import { LuBellRing } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Modal from "react-modal";
import Sidebar from "./Sidebar";
import DashboardLayout from "./DashboardLayout";
Modal.setAppElement("#root");
const Body = () => {
  const [form, setform] = useState({
    categoryName: "",
    widgetName: "",
    widgetText: "",
    isChecked: true,
  });
  const [searchInput, setsearchInput] = useState("");
  const [display, setdisplay] = useState(data);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [originalData, setoriginalData] = useState(data);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [addCategory, setaddCategory] = useState(false);

  function addWidget() {
    let tempCategory = originalData.filter(
      (category) => category.categoryName === form.categoryName
    );
    if (tempCategory.length === 0) {
      const newCategory = {
        categoryName: form.categoryName,
        widgets: [
          {
            widgetName: form.widgetName,
            widgetText: form.widgetText,
            isChecked: true,
          },
        ],
      };

      let alldata = originalData;
      alldata.push(newCategory);
      setoriginalData(alldata);
    } else {
      let tempWidget = {};
      tempWidget.widgetName = form.widgetName;
      tempWidget.widgetText = form.widgetText;
      tempWidget.isChecked = true;
      tempCategory[0].widgets.push(tempWidget);
      let updatedCategory = tempCategory[0];
      setoriginalData((prevoriginalData) =>
        prevoriginalData.map((category) =>
          category.categoryName === form.categoryName
            ? { ...category, updatedCategory }
            : category
        )
      );
    }
    setdisplay(originalData);
    setform({
      ...form,
      categoryName: "",
      widgetName: "",
      widgetText: "",
    });
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
        let matchedWidgets = category.widgets.filter((widget) =>
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
      <div id="header">
        <div>
          <p style={{ color: "blue" }}>
            Home {">"} <strong>Dashboard V2</strong>{" "}
          </p>
        </div>
        <div id="searchbox">
          {" "}
          <input
            id="searchinput"
            type="text"
            placeholder="Search Anything"
            value={searchInput}
            onChange={(e) => search(e)}
          ></input>
          <LuBellRing />
          <MdAccountCircle />
          <p>Admin</p>
        </div>
      </div>

      <div id="dashboard">
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
          </div>
        </div>
        <div id="dashboardLayout">
          {display.map((category, index) => (
            <DashboardLayout
              category={category}
              key={index}
              deleteWidget={deleteWidget}
              form={form}
              setform={setform}
              setModalIsOpen={setModalIsOpen}
            />
          ))}
        </div>
      </div>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        originalData={originalData}
        setdisplay={setdisplay}
      />
      <Modal isOpen={modalIsOpen}  className="my-modal-content"
      overlayClassName="my-modal-overlay"
      ariaHideApp={false}>
        <div id="modalbox">
          <div id="modalheading"> {addCategory ?<p><strong>Add Category</strong></p>  : <p><strong>Add Widget</strong></p> }</div>
           
          <div
            id="modalBody"
                        >
            {addCategory ? (
              <div>
                <label htmlFor="CategoryName"><strong>Category Name :</strong></label>
                <br></br>
                <br></br>
                <input
                  type="text"
                  id="CategoryName" style={{width:"100%",borderRadius:"10px", height:"30px"}}
                  value={form.categoryName}
                  onChange={(e) =>
                    setform({ ...form, categoryName: e.target.value })
                  }
                ></input>{" "}
              </div>
            ) : (
              <div>
                <label htmlFor="formCategory"><strong>Select Category:</strong></label>
                 <br></br>
                  <br></br>
                <select  style={{width:"100%",borderRadius:"10px", height:"30px"}}
                  id="formCategory"
                  value={form.categoryName}
                  onChange={(e) =>
                    setform({ ...form, categoryName: e.target.value })
                  }
                >
                  <option>Select Category</option>
                  {display.map((category, index) => (
                    <option key={index}>{category.categoryName}</option>
                  ))}
                </select>
              </div>
            )}
            <label htmlFor="formWidget"><strong>Widget Name :</strong></label>
            <br></br>
            <br></br>
            <input
              type="text" style={{width:"100%",borderRadius:"10px", height:"30px"}}
              id="formWidget"
              value={form.widgetName}
              onChange={(e) => setform({ ...form, widgetName: e.target.value })}
            ></input>
           
            <label htmlFor="formWidgetText"><strong>Widget Text :</strong></label>
            <br></br>
            <br></br>
            
            <input
              type="text"
              id="formWidgetText" style={{width:"100%",borderRadius:"10px", height:"30px"}}
              value={form.widgetText}
              onChange={(e) => setform({ ...form, widgetText: e.target.value })}
            ></input>
            <br></br>
            <br></br>
            <div id="modalbuttons">
            <button onClick={() => {
                setModalIsOpen(false);
                setaddCategory(false);
                setform({
                  ...form,
                  categoryName: "",
                });
              }}><strong>Cancel</strong> </button>
            <button
              disabled={!formIsValid}
              onClick={() => {
                addWidget();
                setModalIsOpen(false);
                setaddCategory(false);
              }}
            >
             {addCategory ?<p><strong>Add Category</strong></p>  : <p><strong>Add Widget</strong></p> }
            </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Body;
