import { FETCHCARD, LOGIN_FAIL, LOGIN_SUCCESS } from "../../state/Constants";
import axios from "axios";

export const fetchCard = () => async (dispatch) => {
  const response = await axios.get("http://www.localhost:5001/card");
  console.log("response", response);

  dispatch({
    type: FETCHCARD,
    payload: response.data,
  });
};

export const handleApi = (data) => {
  return async (dispatch) => {
    let result = {};

    try {
      result = await axios.post("http://www.localhost:5001/login", {
        data,
      });

      console.log("result", result);
      if (result) {
        dispatch({ type: LOGIN_SUCCESS, payload: result.data });
      } else {
        dispatch({ type: LOGIN_FAIL });
      }
    } catch (err) {
      dispatch({ type: LOGIN_FAIL });
    }
    return result;
  };
};
