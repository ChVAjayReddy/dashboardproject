import { RxCross2 } from "react-icons/rx";
const DashboardLayout = (props) => {
  const { category, index, deleteWidget, form, setform, setModalIsOpen } =
    props;

  return category.widgets.length !== 0 ? (
         <div key={index} id="layoutbox">
     
          <p>
            <strong>{category.categoryName}</strong>
          </p>
          <div
            id="widgetbox"
          >
         
            {category.widgets.map((widget, index) => (
              widget.isChecked===true ? <div className="widget" key={index}>
                <button 
                  className="removebtn"
                  onClick={() => deleteWidget(category.categoryName, index)}
                >
                  <RxCross2 color="white" />
                </button>{" "}
                <p className="widgetname"
                                  >
                  {widget.widgetName}
                </p>
                <p className="widgettext">
                  {widget.widgetText === ""
                    ? "No Data Available"
                    : widget.widgetText}
                </p>
              </div>:null
              
            ))}
            <div
              id="shimmer"
              style={{
                height: "100px",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "lightgrey",
                textAlign: "center",
                justifyContent: "center",
                justifyItems: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => {
                  setModalIsOpen(true);
                  setform({
                    ...form,
                    categoryName: category.categoryName,
                  });
                }}
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  color: "grey",
                  backgroundColor: "white",
                }}
              >
                + Add Widget
              </button>
            </div>
          </div>
        
      </div>
  
  ) : null;
};
export default DashboardLayout;