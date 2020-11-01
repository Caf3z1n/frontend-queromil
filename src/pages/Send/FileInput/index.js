import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';
import upload from '~/assets/upload-file.png';
import word from '~/assets/word-file.png';

import { Container, Text } from './styles';

export default function FileInput() {
  const { registerField } = useField('essayfile');

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'essayfile_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('essayfiles', data);

    const { id, name } = response.data;

    setFile(id);
    setFileName(name);
  }

  return (
    <>
      <Container>
        <label htmlFor="essayfile">
          <img src={file ? word : upload} alt="" />

          <input
            type="file"
            id="essayfile"
            accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            data-file={file}
            onChange={handleChange}
            ref={ref}
          />
        </label>
      </Container>
      <Text>{file ? fileName : '*Selecionar arquivo'}</Text>
    </>
  );
}
