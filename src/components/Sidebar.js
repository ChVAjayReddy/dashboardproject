import { useState } from "react";
function Sidebar({ isOpen, onClose, originalData,setdisplay }) {
  const [tab, settab] = useState(0);
  const[selectedWidgets,setselectedWidgets]=useState([])
   function handleChange(e){
    if(!selectedWidgets.includes(e)){
     setselectedWidgets(prevselectedWidgets => [...prevselectedWidgets, e]);   }
     else{
        let index=selectedWidgets.indexOf(e);
        let copy=selectedWidgets;
        copy.splice(index,1);
        setselectedWidgets(copy)

     }
  console.log(selectedWidgets)
  }
  function tabChange(index) {
    settab(index);
  }
  function updaedWidgtes(){
    const newWidgtes=originalData.map((category)=>
    {let matchedWidgets = category.widgets.filter((widget) =>
          selectedWidgets.includes(widget.widgetName)
        );
        console.log(matchedWidgets)
        if(matchedWidgets.length>0){
            return { ...category, widgets: matchedWidgets };
        }
         return null;
    }  )   
    .filter(Boolean);  
     setdisplay(newWidgtes);   

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
          {originalData.map((category, index) => (
            <div key={index}>
              {tab === index &&
                category.widgets.map((widget, index) => (
                  <div key={index}>
                    <input type="checkbox"  onChange={()=>handleChange(widget.widgetName)} id={widget.widgetName}></input>
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
      <button onClick={()=>updaedWidgtes()}>Submit</button>
    </div>
  );
}

export default Sidebar;
