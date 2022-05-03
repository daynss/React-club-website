import { GET_EVENTS, EVENTS_LOADING, EVENTS_ERROR } from "../types";

const initialState = {
  month: undefined,
  year: undefined,
  eventItems: [],
  eventsLoading: false,
  eventsError: false,
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        month: action.payload.month,
        year: action.payload.year,
        eventItems: action.payload.eventItems,
        eventsLoading: false,
        eventsError: false,
      };

    case EVENTS_LOADING:
      return {
        ...state,
        eventsLoading: true,
        eventsError: false,
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
