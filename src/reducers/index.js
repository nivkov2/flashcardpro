import { SET_STACK } from '../actions';

function stack(state = {}, action) {
  switch (action.type) {
    case SET_STACK :
      return action.stack
    default:
      return{};
  }
}

export default stack;
