import React, { useState, useEffect } from 'react';
import { MdRemoveCircle } from 'react-icons/md';

import api from '~/services/api';

import { Container, Student } from './styles';

export default function AddStudent() {
  const [students, setStudents] = useState([]);
  const [removeStudent, setRemoveStudent] = useState(null);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('relations?myStudents=true');

      setStudents(response.data);
    }

    loadStudents();
  }, [removeStudent]);

  async function handleRemove(id) {
    const response = await api.delete(`relations/${id}`);

    setRemoveStudent(response.data);
  }

  return (
    <Container>
      <header>
        <strong>Meus alunos</strong>
      </header>

      <ul>
        {students.map((user) => (
          <Student key={user.id}>
            <div className="info">
              <img
                src={
                  user.student.avatar
                    ? user.student.avatar.url
                    : `https://avatars.abstractapi.com/v1/?api_key=e61b57f83f824198ac08ffe518ece8dc&&image_size=200&name=${user.student.name}`
                }
                alt="Avatar"
              />
              <div>
                <span className="nome">{user.student.name}</span>
                <span className="email">{user.student.email}</span>
              </div>
            </div>
            <div>
              <button type="button" onClick={() => handleRemove(user.id)}>
                <MdRemoveCircle color="#ff4e4e" size={35} />
              </button>
            </div>
          </Student>
        ))}
      </ul>
    </Container>
  );
}
