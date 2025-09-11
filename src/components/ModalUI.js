import Modal from "react-modal";
function ModalUI(props){
    const{ modalIsOpen, addCategory, form, setform, display, setModalIsOpen, setaddCategory, addWidget,formIsValid}=props
    
    return(
        <Modal isOpen={modalIsOpen}  className="my-modal-content"
      overlayClassName="my-modal-overlay"
      ariaHideApp={false}>
        <div id="modalbox">
          <div id="modalheading"> {addCategory ?<p id="category"><strong>Add Category</strong></p>  : <p id="widget"><strong>Add Widget</strong></p> }</div>
           
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
                <select  style={{width:"100%",borderRadius:"10px", height:"30px", border:"3px soild lightblue"}}
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
              type="text" style={{width:"99%",borderRadius:"10px", height:"30px"}}
              id="formWidget"
              value={form.widgetName}
              onChange={(e) => setform({ ...form, widgetName: e.target.value })}
            ></input>
           
            <label htmlFor="formWidgetText"><strong>Widget Text :</strong></label>
            <br></br>
            <br></br>
            
            <input
              type="text"
              id="formWidgetText" style={{width:"99%",borderRadius:"10px", height:"30px"}}
              value={form.widgetText}
              onChange={(e) => setform({ ...form, widgetText: e.target.value })}
            ></input>
            <br></br>
            <br></br>
            <div id="modalbuttons">
            <button   onClick={() => {
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
             {addCategory ?<p><strong>Add Category</strong></p>:<p><strong>Add Widget</strong></p> }
            </button>
            </div>
          </div>
        </div>
      </Modal>
    )
}
export default ModalUI;