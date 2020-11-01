/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { MdClose, MdFileDownload } from 'react-icons/md';
import { format, parseISO, isValid } from 'date-fns';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import api from '~/services/api';
import { reloadEssaysRequest } from '~/store/modules/essay/actions';

import { Container, Content, Info, Adjusted } from './styles';

export default function EssayView({ visible, data }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [sendDate, setSendDate] = useState('');
  const [adjustedDate, setAdjustedDate] = useState('');
  const [canceledDate, setCanceledDate] = useState('');

  useEffect(() => {
    function formatDate() {
      if (isValid(parseISO(data.created_at))) {
        setSendDate(format(parseISO(data.created_at), 'dd/MM/yyyy'));
      }

      if (isValid(parseISO(data.adjusted_at))) {
        setAdjustedDate(format(parseISO(data.adjusted_at), 'dd/MM/yyyy'));
      }

      if (isValid(parseISO(data.canceled_at))) {
        setCanceledDate(format(parseISO(data.canceled_at), 'dd/MM/yyyy'));
      }
    }

    formatDate();
  }, [data]);

  function handleClose() {
    setShow(!show);
  }

  async function handleCancel(id) {
    const response = await api.delete(`/essays/${id}`);
    dispatch(reloadEssaysRequest());

    handleClose();

    if (response) {
      toast.success('Redação cancelada com sucesso');
    }
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
          <div>
            Enviado: <span>{sendDate}</span>
          </div>
          {data.canceled_at && (
            <div>
              Cancelado: <span>{canceledDate}</span>
            </div>
          )}
          {data.essayfile && (
            <div>
              <a href={data.essayfile.url} download={data.essayfile.name}>
                <MdFileDownload size={20} color="#45c6ff" />
                <span>{data.essayfile.name}</span>
              </a>
            </div>
          )}
        </Info>
        <Adjusted>
          <p>INFORMAÇÕES DA CORREÇÃO</p>
          <div>
            Corretor: {data.professor && <span>{data.professor.name}</span>}
          </div>
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
            Status: <span className={data.status}>{data.status}</span>
          </div>
          {data.adjustedfile && (
            <div>
              <a href={data.adjustedfile.url} download={data.adjustedfile.name}>
                <MdFileDownload size={20} color="#63cc2b" />
                <span>{data.adjustedfile.name}</span>
              </a>
            </div>
          )}
          {data.status === 'Pendente' && (
            <button type="button" onClick={() => handleCancel(data.id)}>
              Cancelar redação
            </button>
          )}
        </Adjusted>
      </Content>
    </Container>
  );
}
