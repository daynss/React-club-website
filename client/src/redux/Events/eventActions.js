import { GET_EVENTS, EVENTS_LOADING, EVENTS_ERROR } from "../types";

export const getEventsList = () => async (dispatch) => {
  try {
    dispatch(setEventsLoading());
    const res = await fetch("/api/events");
    const data = await res.json();

    console.log(data);
    dispatch({
      type: GET_EVENTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: true,
    });
  }
};

export const setEventsLoading = () => ({
  type: EVENTS_LOADING,
});
