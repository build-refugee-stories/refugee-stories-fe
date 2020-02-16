import {
  FETCH_STORY_DATA_START,
  FETCH_STORY_DATA_SUCCESS
  // FETCH_STORY_DATA_FAILURE,
} from '../actions';

const initialState = {
  stories: [],
  isLoading: false,
  error: 'error'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORY_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case FETCH_STORY_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        consolidated_weather: action.payload.stories,
        title: action.payload.title,
        error: false
      };

    default:
      return state;
  }
};
