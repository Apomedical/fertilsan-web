import React from 'react';
import Modal from './Modal';

const ParentComponent = () => {
  return (
    <div>
      <Modal buttonText="Open Modal 1" imageSrc="Text for Modal 1" />
      <Modal buttonText="Open Modal 2" imageSrc="Text for Modal 2" />
    </div>
  );
};

export default ParentComponent;
