import React, { useState, useEffect } from 'react';
import { MdAddCircle } from 'react-icons/md';

import api from '~/services/api';

import { Container, Student } from './styles';

export default function AddStudent() {
  const [students, setStudents] = useState([]);
  const [addStudent, setAddStudent] = useState(null);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('relations');

      setStudents(response.data);
    }

    loadStudents();
  }, [addStudent]);

  async function handleAdd(id) {
    const response = await api.post('relations', {
      student_id: id,
    });

    setAddStudent(response.data);
  }

  return (
    <Container>
      <header>
        <strong>Adicionar alunos</strong>
      </header>

      <ul>
        {students.map((student) => (
          <Student key={student.id}>
            <div className="info">
              <img
                src={
                  student.avatar
                    ? student.avatar.url
                    : `https://avatars.abstractapi.com/v1/?api_key=e61b57f83f824198ac08ffe518ece8dc&&image_size=200&name=${student.name}`
                }
                alt=""
              />
              <div>
                <span className="nome">{student.name}</span>
                <span className="email">{student.email}</span>
              </div>
            </div>
            <div>
              <button type="button" onClick={() => handleAdd(student.id)}>
                <MdAddCircle color="#63cc2b" size={35} />
              </button>
            </div>
          </Student>
        ))}
      </ul>
    </Container>
  );
}
