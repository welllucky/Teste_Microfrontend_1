import React from "react";

const App = () => {
  return (
    <div>
      <header
        style={{ backgroundColor: "red", padding: "10px", color: "white" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2424"
            alt="User"
            style={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "100px",
              height: "100px",
            }}
          />
          <h1>Mike Fox</h1>
        </div>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
            <li style={{ marginRight: "10px" }}>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                Inicio
              </a>
            </li>
            <li style={{ marginRight: "10px" }}>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
        Well APP
      </header>
    </div>
  );
};

export default App;
