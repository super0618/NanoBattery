import "./style.css"; // Import your CSS file with the mask styles
// import Logo from "../assets/images/03Media.svg";
const Test = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <h1
        style={{
          color: "black",
          position: "relative",
          zIndex: 2,
          fontSize: "90px",
        }}
      >
        Your Text
      </h1>
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, black, black)",
        }}
      />
    </div>
  );
};

export default Test;
