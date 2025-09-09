const Shimmer = () => {
  return (
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
       alignItems:"center"
      }}
    >
      <button  style={{ alignContent: "center",
        justifyContent: "center",color:"grey",backgroundColor:"white" }}>+ Add Widget</button>
    </div>
  );
};
export default Shimmer;
