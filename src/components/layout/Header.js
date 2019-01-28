import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Rradar Task Demo</h1>
    </header>
  );
}

const headerStyle = {
  background: "#eaeaea",
  color: "#000",
  textAlign: "center",
  paddingTop: "25px",
  margin: "0",
  height: "100px"
};

export default Header;
