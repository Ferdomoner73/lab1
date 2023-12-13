import React, { useEffect, useState } from 'react';
import LawInfo from './LawInfo/LawInfo';
import data from '../json/info.json';
import { Container } from './app.styled';

export const App = () => {
  const [regulations, setRegulations] = useState([]);

  useEffect(() => {
    setRegulations(data.regulations);
  }, []);

  return (
    <Container>
      <LawInfo regulations={regulations} />
    </Container>
  );
};
