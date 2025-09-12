import React, { useState, useEffect } from "react";
import data from "../utils/Data.json";
import Modal from "react-modal";
import Sidebar from "./Sidebar";
import DashboardLayout from "./DashboardLayout";
import Header from "./Header";
import ModalUI from "./ModalUI";
import DashboardHeader from "./DashboardHeader";
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
      <Header searchInput={searchInput} search={search}></Header>
      <div id="dashboard">
        <DashboardHeader
          setModalIsOpen={setModalIsOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          setaddCategory={setaddCategory}
        />
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
        display={display}
      />
      <ModalUI
        modalIsOpen={modalIsOpen}
        addCategory={addCategory}
        form={form}
        setform={setform}
        display={display}
        setModalIsOpen={setModalIsOpen}
        setaddCategory={setaddCategory}
        addWidget={addWidget}
        formIsValid={formIsValid}
      ></ModalUI>
    </div>
  );
};
export default Body;
