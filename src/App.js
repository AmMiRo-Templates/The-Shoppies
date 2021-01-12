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
      <SearchForm />
      <SearchResults />
      <NominatedFilms />
      <Footer />
    </div>
  );
}

export default App;
