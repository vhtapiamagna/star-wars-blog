import React from 'react'
import { Container } from 'react-bootstrap'

function NotFound() {
  return (
    <Container className="error">
      <img src="https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg" />
      <h1>La ruta que intentas consultar no existe :/</h1>
    </Container>
  );
};

export default NotFound;