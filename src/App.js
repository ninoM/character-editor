import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "hsl(195deg, 20%, 86%)",
          height: "40vh",
          position: "fixed",
          bottom: 0,
          width: "100%",
          // zIndex: -1,
        }}
      />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
