import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import NominatedFilms from "./components/NominatedFilms";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <div className="left-content">
          <SearchForm />
          <SearchResults />
        </div>
        <NominatedFilms />
      </div>

      <Footer />
    </div>
  );
}

export default App;
