import { sweetAlert } from "../../helpers/utils";

export const setDeliveryStatus = (status) => {
  return async (dispatch) => {
      dispatch({
        type: "CHANGE",
        payload: status
      });
  };
};