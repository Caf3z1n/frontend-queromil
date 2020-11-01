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

export const Student = styled.li`
  margin-top: 10px;
  width: 100%;
  background: #fff;
  padding: 20px 15px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-self: center;

  opacity: 0.95;

  &:hover {
    opacity: 1;
  }

  div {
    display: flex;
    flex-direction: column;
    align-self: center;

    span.nome {
      font-size: 20px;
      font-weight: bold;
    }

    span.email {
      font-size: 12px;
      color: #333;
      margin: 5px 0 0 5px;
    }

    button {
      background: none;
      border: 0;
    }
  }

  div.info {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;

      margin-right: 10px;
    }
  }
`;
