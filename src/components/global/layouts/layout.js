import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div style={{ margin: "0 0", maxWidth: "100%", padding: "0 0", }}>
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
