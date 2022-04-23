import { GET_EVENTS, EVENTS_LOADING, EVENTS_ERROR } from "../types";

const initialState = {
  eventItems: [],
  eventsLoading: false,
  eventsError: null,
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        eventItems: action.payload,
        eventsLoading: false,
        eventsError: null,
      };

    case EVENTS_LOADING:
      return {
        ...state,
        eventsLoading: true,
        eventsError: null,
      };

    case EVENTS_ERROR:
      return {
        ...state,
        eventsError: action.payload,
        eventsLoading: false,
      };

    default:
      return state;
  }
};

export default eventReducer;
