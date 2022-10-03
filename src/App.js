import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { DragnDropArea } from "./components/DragnDropArea";
import { SystemInfo } from "./components/SystemInfo";
import { Footer } from "./components/Footer";
import { StdTable } from "./components/StdTable";

function App() {
  return (
    <>
      <Header />
        <div className="mainContainer">
          <div className="content">
              <SystemInfo />
              <StdTable />
              <DragnDropArea />
          </div>
        </div>
      <Footer />
    </>
  );
}

export default App;
