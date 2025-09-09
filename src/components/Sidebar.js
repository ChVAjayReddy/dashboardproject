import { useState } from "react";
function Sidebar({ isOpen, onClose, originalData, setdisplay }) {
  const [tab, settab] = useState(0);
  const [checkedWidgets, setcheckedWidgets] = useState(originalData);
    function tabChange(index) {
    settab(index);
  }
  function handleChange(widgetName) {
  let temp = checkedWidgets.map((category) => {
    let tempwidget = category.widgets.map((widget) =>
      widget.widgetName === widgetName
        ? { ...widget, isChecked: !widget.isChecked }
        : widget
    );
    return { ...category, widgets: tempwidget };
  });
  setcheckedWidgets(temp);
}

  function updaedWidgtes(){
   setdisplay(checkedWidgets)
   
  }
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={onClose}>X</button>
      <div>
        {originalData.map((category, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <button
              onClick={() => tabChange(index)}
              style={{
                backgroundColor: index === tab ? "white" : "#E8E8E8",
                width: "150px",
                height: "50px",
                border: "none",
                boxShadow: index === tab ? "2px 2px 5px grey" : "none",
                borderTop: index === tab ? "2px solid blue" : "0px",
              }}
            >
              {category.categoryName}
            </button>
          </div>
        ))}
        <div>
          {checkedWidgets.map((category, index) => (
            <div key={index}>
              {tab === index &&
                category.widgets.map((widget, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={widget.isChecked}
                      onClick={() => handleChange(widget.widgetName)}
                      id={widget.widgetName}
                    ></input>
                    <p
                      style={{
                        paddingTop: "20px",
                        textAlign: "center",
                        boxShadow: "2px 2px 5px grey",
                      }}
                    >
                      {widget.widgetName}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => {updaedWidgtes();
          onClose();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Sidebar;
