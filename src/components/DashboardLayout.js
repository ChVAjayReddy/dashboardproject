const DashboardLayout = (props) => {
  const { category, index, deleteWidget, form, setform, setModalIsOpen } =
    props;

  return category.widgets.length !== 0 ? (
    <div key={index} id="categorybox">
      <p>
        <strong>{category.categoryName}</strong>
      </p>
      <div id="widgetbox">
        {category.widgets.map((widget, index) =>
          widget.isChecked === true ? (
            <div className="widget" key={index}>
              <button
                className="removebtn"
                onClick={() => deleteWidget(category.categoryName, index)}
              >
                <strong>X</strong>
              </button>{" "}
              <p className="widgetname">{widget.widgetName}</p>
              <p className="widgettext">
                {widget.widgetText === "" ? (
                  <div id="nodata">
                    <p id="graph">📈</p>
                    <p id="nodatatext">No data available</p>
                  </div>
                ) : (
                  widget.widgetText
                )}
              </p>
            </div>
          ) : null
        )}
        <div id="shimmer">
          <button
            id="shimmerbtn"
            onClick={() => {
              setModalIsOpen(true);
              setform({
                ...form,
                categoryName: category.categoryName,
              });
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
