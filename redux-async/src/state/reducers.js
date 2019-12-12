import * as types from "./actionTypes";
import axios from "axios";
const initialRates = [];

export function ratesReducer(rates = initialRates, action) {
  switch (action.type) {
    case types.SET_RATES:
      return action.payload;
    default:
      return rates;
  }
}

export const getRates = () => dispatch => {
  axios
    .get("https://api.coingecko.com/api/v3/exchanges?per_page=20")
    .then(res => {
      const rates = res.data;
      dispatch({
        type: types.SET_RATES,
        payload: rates
      });
    })
    .catch(err => {
      err;
    });
};
