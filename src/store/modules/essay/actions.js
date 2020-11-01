export function reloadEssaysRequest() {
  return {
    type: '@essay/RELOAD_ESSAYS_REQUEST',
  };
}

export function reloadEssaysSuccess(essays) {
  return {
    type: '@essay/RELOAD_ESSAYS_SUCCESS',
    payload: { essays },
  };
}

export function sendEssayRequest(data) {
  return {
    type: '@essay/SEND_ESSAY_REQUEST',
    payload: { data },
  };
}

export function sendEssaySuccess() {
  return {
    type: '@essay/SEND_ESSAY_SUCCESS',
  };
}

export function sendEssayFailure() {
  return {
    type: '@essay/SEND_ESSAY_FAILURE',
  };
}

export function correctEssayRequest(id) {
  return {
    type: '@essay/CORRECT_ESSAY_REQUEST',
    payload: { id },
  };
}

export function adjustedEssayRequest(data, id) {
  return {
    type: '@essay/ADJUSTED_ESSAY_REQUEST',
    payload: { data, id },
  };
}

export function adjustedEssaySuccess() {
  return {
    type: '@essay/ADJUSTED_ESSAY_SUCCESS',
  };
}

export function adjustedEssayFailure() {
  return {
    type: '@essay/ADJUSTED_ESSAY_FAILURE',
  };
}
