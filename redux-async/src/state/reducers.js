import * as types from "./actionTypes";

const initialRates = [{ name: "abdel", id: 22 }];

export function ratesReducer(rates = initialRates, action) {
  switch (action.type) {
    case types.SET_RATES:
      return action.payload;
    default:
      return rates;
  }
}
