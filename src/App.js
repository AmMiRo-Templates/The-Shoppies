import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import NominatedFilms from "./components/NominatedFilms";
import CongratsBanner from "./components/CongratsBanner";
import { useSelector } from "react-redux";

function App() {
  const nominationsComplete = useSelector((state) => state.nominationsComplete);

  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <div className="left-content">
          {nominationsComplete === false ? (
            <>
              <SearchForm />
              <SearchResults />
            </>
          ) : (
            <CongratsBanner />
          )}
        </div>
        <NominatedFilms />
      </div>

      <Footer />
    </div>
  );
}

export default App;
