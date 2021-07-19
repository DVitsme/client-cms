import React, { useState } from 'react';
import ClientContainer from '../components/Clients/ClientContainer';

function Index() {
  const [show, setShow] = useState(null);
  const clients = new Array(5);
  return (
    <>
      <ClientContainer show={show} setShow={setShow} clients={clients} />
    </>
  );
}

export default Index;
