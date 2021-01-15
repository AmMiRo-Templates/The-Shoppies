import React from "react";

function CongratsBanner() {
  return (
    <div className="congrats-wrapper">
      <h2>Congratulations! You have nominated 5 films.</h2>
      <h2>
        If you would like to change your nominations, simply remove a nominated
        film and try another search.
      </h2>
    </div>
  );
}

export default CongratsBanner;
