import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';

import { reloadEssaysRequest } from '~/store/modules/essay/actions';
import api from '~/services/api';

import EssayView from './EssayView';
import { Container, Essay } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    function loadEssays() {
      dispatch(reloadEssaysRequest());
    }

    loadEssays();
  }, [dispatch]);

  function formatDate(date) {
    return format(parseISO(date), 'dd/MM/yyyy');
  }

  async function handleView(id) {
    const response = await api.get(`essays/${id}`);
    setData(response.data);

    setVisible(!visible);
  }

  const essays = useSelector((state) => state.essay.essays);

  return (
    <Container>
      <header>
        <strong>Redações Não Corrigidas</strong>
      </header>

      <ul>
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
      </ul>
      <EssayView visible={visible} data={data} />
    </Container>
  );
}
