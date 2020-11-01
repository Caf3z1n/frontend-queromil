import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  reloadEssaysSuccess,
  sendEssaySuccess,
  sendEssayFailure,
  adjustedEssaySuccess,
  adjustedEssayFailure,
} from './actions';

export function* reloadEssays() {
  try {
    const response = yield call(api.get, 'essays');

    yield put(reloadEssaysSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao carregar as redações');
  }
}

export function* sendEssay({ payload }) {
  try {
    const { essayfile_id, theme } = payload.data;

    if (essayfile_id) {
      yield call(api.post, 'essays', {
        theme,
        essayfile_id,
        professor_id: 1,
      });

      yield put(sendEssaySuccess());

      toast.success('Redação enviada com sucesso');

      history.push('/student-dashboard');
    } else {
      toast.error('Selecione o arquivo da redação');
    }
  } catch (err) {
    toast.error('Falha ao enviar redação');
    yield put(sendEssayFailure());
  }
}

export function correctEssay() {
  history.push('/professor-dashboard/correct');
}

export function* adjustedEssay({ payload }) {
  try {
    const { adjustedfile_id, points } = payload.data;
    const { id } = payload;

    if (adjustedfile_id) {
      yield call(api.put, `essays/${id}`, {
        adjustedfile_id,
        points,
      });

      yield put(adjustedEssaySuccess());

      toast.success('Redação corrigida com sucesso');

      history.push('/professor-dashboard');
    } else {
      toast.error('Selecione o arquivo da redação');
    }
  } catch (err) {
    toast.error('Falha ao corrigir redação');
    yield put(adjustedEssayFailure());
  }
}

export default all([
  takeLatest('@essay/RELOAD_ESSAYS_REQUEST', reloadEssays),
  takeLatest('@essay/SEND_ESSAY_REQUEST', sendEssay),
  takeLatest('@essay/CORRECT_ESSAY_REQUEST', correctEssay),
  takeLatest('@essay/ADJUSTED_ESSAY_REQUEST', adjustedEssay),
]);
