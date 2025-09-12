import { useState } from "react";
function Sidebar({ isOpen, onClose, originalData, setdisplay, display }) {
  const [tab, settab] = useState(0);
  const [displayWidgets, setdisplayWidgets] = useState(originalData);
  function tabChange(index) {
    settab(index);
  }
  function handleChange(widgetName) {
    let temp = displayWidgets.map((category) => {
      let tempwidget = category.widgets.map((widget) =>
        widget.widgetName === widgetName
          ? { ...widget, isChecked: !widget.isChecked }
          : widget
      );
      return { ...category, widgets: tempwidget };
    });

    setdisplayWidgets(temp);
  }
  function unchagedWidgets() {
    setdisplayWidgets(display);
  }

  function updatedWidgtes() {
    setdisplay(displayWidgets);
  }

  return (
    <div>
      {isOpen && (
        <div
          className="overlay"
          onClick={() => {
            unchagedWidgets();
            onClose();
          }}
        ></div>
      )}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div>
          <p id="sidebarheading">Manage Widgets</p>
          <div id="sidebarbody">
            <p style={{ paddingLeft: "10px" }}>
              personalise your dashboard by adding/removing the following widget
            </p>
            <div id="sidebarcategory">
              {displayWidgets.map((category, index) => (
                <div id="sidebarwidgets" key={index}>
                  <button
                    onClick={() => tabChange(index)}
                    style={{
                      backgroundColor: "white",
                      width: "120px",
                      height: "50px",
                      border: "none",
                      borderBottom:
                        index === tab ? "2px solid blue" : "2px solid grey",
                    }}
                  >
                    {category.categoryName}
                  </button>
                </div>
              ))}
            </div>
            <div>
              {displayWidgets.map((category, index) => (
                <div id="sidebarwidget" key={index}>
                  {tab === index &&
                    category.widgets.map((widget, index) => (
                      <div
                        key={index}
                        style={{
                          border: "1px solid grey",
                          width: "98%",
                          margin: "1%",
                          display: "flex",
                          alignItems: "center",
                          color: "#0e0eb0",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={widget.isChecked}
                          onChange={() => handleChange(widget.widgetName)}
                          id={widget.widgetName}
                        ></input>
                        <p style={{ marginTop: "8px", marginBottom: "8px" }}>
                          {widget.widgetName}
                        </p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
            <div id="sidebarbuttons">
              <button
                onClick={() => {
                  unchagedWidgets();
                  onClose();
                }}
                style={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  color: "rgb(54, 54, 149)",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  updatedWidgtes();
                  onClose();
                }}
                style={{
                  backgroundColor: "rgb(54, 54, 149)",
                  cursor: "pointer",
                  color: "white",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
