import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRates } from "../state/actionCreators";

export function Markets({ marketPlaces, getRates }) {
  debugger;
  useEffect(() => {
    getRates();
  });

  return (
    <div className="App-header">
      <p>The top 20 cryptocurrencies markets:</p>
      {marketPlaces.map(cryptoMarket => (
        <div
          style={{ border: "2px solid black", padding: "20px", margin: "20px" }}
        >
          <p>Name: {cryptoMarket.name} </p>
          <p>Year Established: {cryptoMarket.year_established}</p>

          <p>Country: {cryptoMarket.country}</p>
          <p>
            <img
              src={cryptoMarket.image}
              alt="logos of the top cryptocurrency markets"
            />
          </p>
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    marketPlaces: state.marketSites
  };
}

export default connect(mapStateToProps, { getRates })(Markets);
