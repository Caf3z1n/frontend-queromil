/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { MdClose, MdFileDownload } from 'react-icons/md';
import { format, parseISO, isValid } from 'date-fns';

import { Container, Content, Info, Adjusted } from './styles';

export default function EssayView({ visible, data }) {
  const [show, setShow] = useState(false);
  const [sendDate, setSendDate] = useState('');
  const [adjustedDate, setAdjustedDate] = useState('');

  useEffect(() => {
    function formatDate() {
      if (isValid(parseISO(data.created_at))) {
        setSendDate(format(parseISO(data.created_at), 'dd/MM/yyyy'));
      }

      if (isValid(parseISO(data.adjusted_at))) {
        setAdjustedDate(format(parseISO(data.adjusted_at), 'dd/MM/yyyy'));
      }
    }

    formatDate();
  }, [data]);

  function handleClose() {
    setShow(!show);
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
          {data.adjusted_at && (
            <>
              <div>
                Pontos: <span>{data.points}</span>
              </div>
              <div>
                Corrigido: <span>{adjustedDate}</span>
              </div>
            </>
          )}
          <div>
            Status: <span className="Corrigido">{data.status}</span>
          </div>
          {data.adjustedfile && (
            <div>
              <a href={data.adjustedfile.url}>
                <MdFileDownload size={20} color="#63cc2b" />
                <span>{data.adjustedfile.name}</span>
              </a>
            </div>
          )}
        </Adjusted>
      </Content>
    </Container>
  );
}
