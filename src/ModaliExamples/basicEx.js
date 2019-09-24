import React from 'react';
import Modali, { useModali } from 'modali';

const BasicModali = () => {
  const [exampleModal, toggleExampleModal] = useModali();

  return (
    <div className="app">
      <button onClick={toggleExampleModal}>
        Click me to open a basic modal
      </button>
      <Modali.Modal {...exampleModal}>
        Hi, I'm a Modali!
      </Modali.Modal>
    </div>
  );
};

export default BasicModali;