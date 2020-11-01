import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import EssayView from './EssayView';
import { Container, Essay } from './styles';

export default function Correct() {
  const [essays, setEssays] = useState([]);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function LoadEssays() {
      const response = await api.get('essays?adjusted=true');

      setEssays(response.data);
    }

    LoadEssays();
  }, []);

  async function handleView(id) {
    const response = await api.get(`/essays/${id}`);
    setData(response.data);

    setVisible(!visible);
  }

  function formatDate(date) {
    return format(parseISO(date), 'dd/MM/yyyy');
  }

  return (
    <Container>
      <header>
        <strong>Redações Já Corrigidas</strong>
      </header>

      {essays.map((essay) => (
        <Essay key={essay.id}>
          <button type="button" onClick={() => handleView(essay.id)}>
            <div>
              <span className="tema">
                <strong>TEMA: </strong>
                {essay.theme}
              </span>
              <span className="enviado">
                <strong>ENVIADO: </strong>
                {formatDate(essay.created_at)}
              </span>
            </div>
            <div>
              <span className="nome">
                ENVIADO POR:{' '}
                <strong>{essay.student && essay.student.name}</strong>
              </span>
            </div>
          </button>
        </Essay>
      ))}
      <EssayView visible={visible} data={data} />
    </Container>
  );
}
