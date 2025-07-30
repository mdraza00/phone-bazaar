export function Product() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        width:'fit-content'
      }}
    >
      <img
        style={{
          width: "100%",
          maxHeight: "250px",
          objectFit: "cover",
          aspectRatio:'1/1',
          borderRadius: "7px",
        }}
        src="/slider/img-1.jpg"
      />
      <h5 style={{ margin: 0, color: "#777" }}>Apple</h5>
      <h4 style={{ margin: 0 }}>Iphone 15</h4>
      <p style={{ margin: 0 }}>80,000</p>
    </div>
  );
}
