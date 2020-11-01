import produce from 'immer';

const INITIAL_STATE = {
  essays: [],
  loading: false,
  id: null,
};

export default function essay(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@essay/RELOAD_ESSAYS_SUCCESS': {
        draft.essays = action.payload.essays;
        break;
      }
      case '@essay/SEND_ESSAY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@essay/SEND_ESSAY_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@essay/SEND_ESSAY_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@essay/CORRECT_ESSAY_REQUEST': {
        draft.id = action.payload.id;
        break;
      }
      case '@essay/ADJUSTED_ESSAY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@essay/ADJUSTED_ESSAY_SUCCESS': {
        draft.loading = false;
        draft.id = null;
        break;
      }
      case '@essay/ADJUSTED_ESSAY_FAILURE': {
        draft.loading = false;
        draft.id = null;
        break;
      }
      default:
    }
  });
}
