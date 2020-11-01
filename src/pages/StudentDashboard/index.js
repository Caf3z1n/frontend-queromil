/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';
import { reloadEssaysRequest } from '~/store/modules/essay/actions';

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
  }, []);

  async function handleView(id) {
    const response = await api.get(`/essays/${id}`);
    setData(response.data);

    setVisible(!visible);
  }

  function formatDate(date) {
    return format(parseISO(date), 'dd/MM/yyyy');
  }

  const essays = useSelector((state) => state.essay.essays);

  return (
    <Container>
      <header>
        <strong>Minhas Redações</strong>
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
                <span className={essay.status}>
                  STATUS: <strong>{essay.status}</strong>
                </span>
                {essay.points && (
                  <span className="nota">
                    <strong>NOTA: </strong>
                    {essay.points}
                  </span>
                )}
              </div>
            </button>
          </Essay>
        ))}
      </ul>
      <EssayView visible={visible} data={data} />
    </Container>
  );
}
