import { TOGGLE_ME } from '../actions/types';

const initialState = {
  messageVisibility: false
}

export default function(state = initialState, action) {
  const { type } = action;

  switch(type) {
    case TOGGLE_ME: {
      return {
        ...state,
        messageVisibility: !state.messageVisibility,
      }
    }
    default: {
      return state
    }
  }
}