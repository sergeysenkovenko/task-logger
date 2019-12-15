import {} from "../actions/types";

const initialState = {
  techs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
