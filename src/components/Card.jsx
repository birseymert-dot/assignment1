function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "10px 0",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
