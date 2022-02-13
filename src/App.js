import React from "react";
import About from "./components/About";
import Album from "./components/Album";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <About />
        <Album />
      </main>
      <Footer />
    </>
  );
};
export default App;
