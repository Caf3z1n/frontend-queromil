import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import FileInput from './FileInput';
import { adjustedEssayRequest } from '~/store/modules/essay/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  adjustedfile_id: Yup.number(),
  points: Yup.number().required('A pontuação é obrigatória'),
});

export default function Correct() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.essay);
  const { id } = useSelector((state) => state.essay);

  function handleSubmit(data) {
    dispatch(adjustedEssayRequest(data, id));
  }

  return (
    <Container>
      <header>
        <strong>Corrigir Redação</strong>
      </header>

      <Form schema={schema} onSubmit={handleSubmit}>
        <FileInput name="adjustedfile_id" />

        <Input
          name="points"
          type="number"
          min="0"
          max="1000"
          placeholder="Pontos"
        />

        <button type="submit">{loading ? 'Corrigindo...' : 'Corrigir'}</button>
      </Form>
    </Container>
  );
}
