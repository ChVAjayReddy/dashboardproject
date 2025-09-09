import { RxCross2 } from "react-icons/rx";
const DashboardLayout = (props) => {
  const { category, index, deleteWidget, form, setform, setModalIsOpen } =
    props;

  return category.widgets.length !== 0 ? (
    <div>
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
                  onClick={() => deleteWidget(category.categoryName, index)}
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
                <p>
                  {widget.widgetText === ""
                    ? "No Data Available"
                    : widget.widgetText}
                </p>
              </div>
            ))}
            <div
              id="shimmer"
              style={{
                height: "80px",
                borderRadius: "20px",
                padding: "10px",
                backgroundColor: "grey",
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
      </div>
    </div>
  ) : null;
};
export default DashboardLayout;
