import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./customreact/Header";
import Sidebar from "./customreact/Sidebar";
import Footer from "./customreact/Footer";
import Form from "./customreact/Form";
import { useState } from "react";
import Postlist from "./customreact/Postlist";
import PostlistProvider from "./customreact/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const appContainerStyle = {
    display: "flex",
    minHeight: "100vh", // Full viewport height
  };

  const sidebarStyle = {
    flexShrink: 0,
    width: "280px",
    minHeight: "800px",
    backgroundColor: "black", // Black background for sidebar
    color: "white", // White text for better contrast
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", // Shadow for sidebar
  };

  const contentContainerStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#ffffff", // Optional: background for content
  };

  const mainContentStyle = {
    flex: 1,
    padding: "20px",
  };

  return (
    
      <div style={appContainerStyle}>
        <div style={sidebarStyle}>
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
        <div style={contentContainerStyle}>
          <Header />
          <div style={mainContentStyle}>
            {selectedTab === "Home" && <Postlist />}
            {selectedTab === "Create Post" && <Form />}
          </div>
          <Footer />
        </div>
      </div>
    
  );
}

export default App;
