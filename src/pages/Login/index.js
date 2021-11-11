import React from 'react';
import { Container } from './styles';
import Api from '../../Api';

export function Login({onReceive}) {
  async function handleFacebookLogin(){
    let result = await Api.fbPopup();

    if (result) {
      onReceive(result.user);
    }else {
      alert("Erro!");
    }
  }

  return (
    <Container>
      <button onClick={handleFacebookLogin}>Logar com Facebook</button>
    </Container>
  )
}