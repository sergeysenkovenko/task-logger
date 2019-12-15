import {
  GET_TECHS,
  DELETE_TECH,
  ADD_TECH,
  SET_LOADING,
  TECHS_ERROR
} from "./types";

export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};

export const addTech = tech => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch("/techs", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(tech)
      });
  
      const data = await res.json();
  
      dispatch({
        type: ADD_TECH,
        payload: data
      });
     
    } catch (error) {
      dispatch({
        type: TECHS_ERROR,
        payload: error.response.statusText
      });
    }
  };
  
  export const deleteTech = id => async dispatch => {
    try {
      setLoading();
  
      await fetch(`/techs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      });
  
      dispatch({
        type: DELETE_TECH,
        payload: id
      });

    } catch (error) {
      dispatch({
        type: TECHS_ERROR,
        payload: error.response.statusText
      });
    }
  };

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
