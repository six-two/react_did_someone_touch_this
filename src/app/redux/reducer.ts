import * as Actions from './actions';
import { State, fallbackState } from './store';


function reducer(state: State | undefined, action: Actions.Action): State {
  if (!state) {
    console.warn("No state was supplied to reducer. Falling back to default values");
    state = fallbackState;
  }

  // state = {
  //   ...state,
  //   updateCounter: state.updateCounter + 1,
  // };

  switch (action.type) {
    case Actions.SET_IMAGE: {
      return handle_setImage(state, action);
    }
    default:
      console.warn(`Unknown action type: "${action.type}"`);
      return state;
  }
}

function handle_setImage(state: State, action: Actions.Action): State {
  let payload = (action as Actions.SetImageAction).payload;
  switch (payload.imageName) {
    case Actions.AFTER_IMAGE:
      return {
        ...state,
        afterImage: {
          data: payload.imageData,
          updateCount: state.afterImage.updateCount + 1,
        },
      }
    case Actions.BEFORE_IMAGE:
      return {
        ...state,
        beforeImage: {
          data: payload.imageData,
          updateCount: state.beforeImage.updateCount + 1,
        },
      }
    case Actions.DIFF_IMAGE:
      return {
        ...state,
        diffImage: {
          data: payload.imageData,
          updateCount: state.diffImage.updateCount + 1,
        },
      }
    default:
      console.warn(`Unknown image name: "${payload.imageName}"`);
      return state;
  }
}

export default reducer
