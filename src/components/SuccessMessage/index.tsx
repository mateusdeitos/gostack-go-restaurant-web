import React from 'react';
import thumbsUp from '../../assets/thumbs-up.svg';
import { Container } from './styles';

const SuccessMessage: React.FC = () => {
  return (
    <Container>
      <img src={thumbsUp} alt="Sucesso!" />
      <p>Prato Adicionado!</p>
    </Container>
  );
};

export default SuccessMessage;
