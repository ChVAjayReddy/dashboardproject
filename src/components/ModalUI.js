import Modal from "react-modal";
import { FaAsterisk } from "react-icons/fa";
function ModalUI(props) {
  const {
    modalIsOpen,
    addCategory,
    form,
    setform,
    display,
    setModalIsOpen,
    setaddCategory,
    addWidget,
    formIsValid,
  } = props;

  return (
    <Modal
      isOpen={modalIsOpen}
      className="my-modal-content"
      overlayClassName="my-modal-overlay"
      onRequestClose={() => {
        setModalIsOpen(false);
        setaddCategory(false);
        setform({
          ...form,
          categoryName: "",
          widgetName: "",
          widgetText: "",
        });
      }}
      ariaHideApp={false}
    >
      <div id="modalbox">
        <div id="modalheading">
          {" "}
          {addCategory ? (
            <p id="category">Add Category</p>
          ) : (
            <p id="widget">Add Widget</p>
          )}
        </div>

        <div id="modalBody">
          {addCategory ? (
            <div>
              <label htmlFor="CategoryName">
                Category Name{" "}
                <sup>
                  <FaAsterisk color="red" size={10} />
                </sup>
              </label>
              <br></br>
              <br></br>
              <input
                type="text"
                id="CategoryName"
                style={{ width: "100%", borderRadius: "10px", height: "30px" }}
                value={form.categoryName}
                onChange={(e) =>
                  setform({ ...form, categoryName: e.target.value })
                }
              ></input>{" "}
            </div>
          ) : (
            <div>
              <label htmlFor="formCategory">
                Select Category{" "}
                <sup>
                  <FaAsterisk color="red" size={10} />
                </sup>
              </label>
              <br></br>
              <br></br>
              <select
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  height: "30px",
                  border: "3px soild rgb(54, 54, 149);",
                }}
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
          <br></br>
          <label htmlFor="formWidget">
            Widget Name{" "}
            <sup>
              <FaAsterisk color="red" size={10} />
            </sup>
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            style={{ width: "99%", borderRadius: "10px", height: "30px" }}
            id="formWidget"
            value={form.widgetName}
            onChange={(e) => setform({ ...form, widgetName: e.target.value })}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="formWidgetText">Widget Text :</label>
          <br></br>
          <br></br>

          <input
            type="text"
            id="formWidgetText"
            style={{ width: "99%", borderRadius: "10px", height: "30px" }}
            value={form.widgetText}
            onChange={(e) => setform({ ...form, widgetText: e.target.value })}
          ></input>
          <br></br>
          <br></br>
          <div id="modalbuttons">
            <button
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgb(54, 54, 149)",
                cursor: "pointer",
                padding: "10px",
                borderRadius: "5px",
                color: "rgb(54, 54, 149)",
              }}
              onClick={() => {
                setModalIsOpen(false);
                setaddCategory(false);
                setform({
                  ...form,
                  categoryName: "",
                  widgetName: "",
                  widgetText: "",
                });
              }}
            >
              Cancel{" "}
            </button>
            <button
              style={{
                backgroundColor: !formIsValid ? "gray" : "rgb(54, 54, 149)",
                cursor: "pointer",
                padding: "10px",
                borderRadius: "5px",
                color: "white",
              }}
              disabled={!formIsValid}
              onClick={() => {
                addWidget();
                setModalIsOpen(false);
                setaddCategory(false);
              }}
            >
              {addCategory ? "Add Category" : "Add Widget"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default ModalUI;
