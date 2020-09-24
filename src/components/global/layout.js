import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div style={{ margin: "0 auto", maxWidth: "960px", padding: "0 1.0875rem 1.45rem", }}>
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
