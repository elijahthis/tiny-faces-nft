import "../css/pieces.css";

const Button = ({ children, bg, col }) => {
  return (
    <button
      style={{
        color: col ? col : "white",
        border: "1px solid",
        borderColor: col ? col : "white",
        backgroundColor: bg ? bg : "#0ac05e",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
