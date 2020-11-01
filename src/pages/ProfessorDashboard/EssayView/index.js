/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdClose, MdFileDownload } from 'react-icons/md';
import { format, parseISO, isValid } from 'date-fns';

import { correctEssayRequest } from '~/store/modules/essay/actions';

import { Container, Content, Info, Adjusted } from './styles';

export default function EssayView({ visible, data }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [sendDate, setSendDate] = useState('');

  useEffect(() => {
    function formatDate() {
      if (isValid(parseISO(data.created_at))) {
        setSendDate(format(parseISO(data.created_at), 'dd/MM/yyyy'));
      }
    }

    formatDate();
  }, [data]);

  function handleClose() {
    setShow(!show);
  }

  function handleSubmit(id) {
    dispatch(correctEssayRequest(id));
  }

  if (visible === show) {
    return null;
  }

  return (
    <Container>
      <Content>
        <Info>
          <div className="header">
            <p>INFORMAÇÕES DA REDAÇÃO</p>
            <button type="button" onClick={() => handleClose()}>
              <MdClose size={20} />
            </button>
          </div>
          <div>
            Tema: <span>{data.theme}</span>
          </div>
          {data.student && (
            <>
              <div>
                Nome: <span>{data.student.name}</span>
              </div>
              <div>
                Email: <span>{data.student.email}</span>
              </div>
            </>
          )}
          <div>
            Enviado: <span>{sendDate}</span>
          </div>
          {data.essayfile && (
            <div>
              <a href={data.essayfile.url}>
                <MdFileDownload size={20} color="#45c6ff" />
                <span>{data.essayfile.name}</span>
              </a>
            </div>
          )}
        </Info>
        <Adjusted>
          <p>INFORMAÇÕES DA CORREÇÃO</p>
          <div>
            Status: <span className="Pendente">{data.status}</span>
          </div>
          <button type="button" onClick={() => handleSubmit(data.id)}>
            Corrigir Redação
          </button>
        </Adjusted>
      </Content>
    </Container>
  );
}
