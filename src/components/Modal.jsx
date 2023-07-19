import React from "react";

const Modal = ({ buttonText, imageSrc, imageWidth, imageHeight }) => {
  const openModal = () => {
    const modalWindow = window.open("", "_blank", "width=800,height=600");
    modalWindow.document.write(`
      <html>
        <head>
          <title>Modal</title>
          <style>
          
          </style>
        </head>
        <body>
        <img src="${imageSrc}" alt="Modal Image" width="${imageWidth}" height="${imageHeight}" />
        </body>
      </html>
    `);
    modalWindow.document.close();
  };

  return (
    <div className="button-container">
      <button onClick={openModal} className="custom-button">
        {buttonText}
      </button>
    </div>
  );
};

export default Modal;
