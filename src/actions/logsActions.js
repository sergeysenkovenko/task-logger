import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SET_SEARCH
} from "./types";

export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    });
  }
};

export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(log)
    });

    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    });
  }
};

export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    });
  }
};

export const updateLog = log => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch(`/logs/${log.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(log)
      });
      
      const data = await res.json()

      dispatch({
        type: UPDATE_LOG,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.statusText
      });
    }
  };

export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const setSearch = text => {
    return {
        type: SET_SEARCH,
        payload: text
    }
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
