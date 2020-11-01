import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import history from '~/services/history';

import FileInput from './FileInput';
import { sendEssayRequest } from '~/store/modules/essay/actions';
import api from '~/services/api';

import { Container } from './styles';

const schema = Yup.object().shape({
  essayfile_id: Yup.number(),
  theme: Yup.string().required('O tema é obrigatório'),
});

export default function Send() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.essay);

  useEffect(() => {
    async function VerifyStudent() {
      const response = await api.get('relations');

      const { relation } = response.data;

      if (!relation) {
        toast.error(
          'É necessario que o corretor te adicione para poder enviar redações'
        );

        history.push('/student-dashboard');
      }
    }

    VerifyStudent();
  }, []);

  function handleSubmit(data) {
    dispatch(sendEssayRequest(data));
  }

  return (
    <Container>
      <header>
        <strong>Enviar Redação</strong>
      </header>

      <Form schema={schema} onSubmit={handleSubmit}>
        <FileInput name="essayfile_id" />

        <Input name="theme" placeholder="Tema da sua redação" />

        <button type="submit">{loading ? 'Enviando...' : 'Enviar'}</button>
      </Form>
    </Container>
  );
}
