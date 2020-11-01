import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;
    margin: 0 0 15px;

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    list-style: none;
  }
`;

export const Essay = styled.li`
  margin-top: 10px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-self: center;

  opacity: 0.95;

  &:hover {
    opacity: 1;
  }

  button {
    border: 0;
    background: none;

    padding: 5px 15px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    span.tema {
      max-width: 600px;
      font-size: 18px;
      text-align: justify;
    }

    span.enviado {
      font-size: 12px;
    }

    span.nome {
      font-size: 14px;

      strong {
        font-size: 16px;
        color: #ff4e4e;
      }
    }
  }
`;
