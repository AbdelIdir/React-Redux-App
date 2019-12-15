import axios from "axios";
import * as types from "./actionTypes";

export const getRates = () => dispatch => {
  axios
    .get("https://api.coingecko.com/api/v3/exchanges?per_page=20")
    .then(res => {
      debugger;
      dispatch({
        type: types.SET_RATES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
