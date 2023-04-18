import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
const CommonModal = ({children,openModal,closeModal,modalIsOpen}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex:"1000"
    },
  };
  return (
    <div style={{zIndex:"1111"}}>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >{children}</Modal>
    </div>
  );
};

export default CommonModal;
